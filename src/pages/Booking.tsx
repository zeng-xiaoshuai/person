import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const steps = ["选择服务", "个人信息", "备孕情况", "联系方式"];

interface FormData {
  service: string;
  name: string;
  age: string;
  city: string;
  partner: string;
  duration: string;
  previousIVF: string;
  phone: string;
  email: string;
  preferredTime: string;
  notes: string;
}

const initial: FormData = {
  service: "",
  name: "",
  age: "",
  city: "",
  partner: "single",
  duration: "",
  previousIVF: "no",
  phone: "",
  email: "",
  preferredTime: "",
  notes: "",
};

export default function Booking() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState(1);

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) => setData((d) => ({ ...d, [k]: v }));

  const next = () => {
    setDirection(1);
    if (step < 3) setStep(step + 1);
    else setSubmitted(true);
  };
  const back = () => {
    setDirection(-1);
    if (step > 0) setStep(step - 1);
  };

  const canProceed = () => {
    if (step === 0) return !!data.service;
    if (step === 1) return !!data.name && !!data.age && !!data.city;
    if (step === 2) return !!data.duration;
    if (step === 3) return !!data.phone;
    return true;
  };

  if (submitted) {
    return (
      <section className="pt-40 pb-32 bg-ivory-100 min-h-[80vh] flex items-center">
        <div className="container-narrow text-center">
          <Reveal>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto h-24 w-24 rounded-full bg-rose-100 flex items-center justify-center mb-10"
            >
              <Check size={36} strokeWidth={1.5} className="text-rose-500" />
            </motion.div>
            <div className="font-sans text-[10px] uppercase tracking-wider2 text-rose-400 mb-4">Submitted</div>
            <h1 className="font-display text-display-md text-ink-800 leading-[1.05]">
              谢谢你的信任。<br />
              <span className="italic text-rose-400">我们已收到你的预约。</span>
            </h1>
            <p className="mt-6 text-ink-400 font-sansCN max-w-lg mx-auto leading-relaxed">
              我们的个案管理师将在 1 个工作日内通过电话或邮件与你联系，确认咨询时间。整个过程不构成就医建议，咨询完全免费。
            </p>
            <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-ivory-200">
              <span className="font-sans text-[10px] uppercase tracking-wider2 text-ink-400">服务热线</span>
              <span className="font-display text-ink-800">400 · 866 · 0086</span>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-24 bg-ivory-100 min-h-screen">
      <div className="container-wide">
        <Reveal>
          <div className="font-sans text-[10px] uppercase tracking-wider2 text-ink-400 mb-6">
            Book a Consultation
          </div>
          <h1 className="font-display text-display-lg text-ink-800 leading-[1.02] max-w-3xl">
            开始一次<br /><span className="italic text-rose-400">温柔的对话</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-ink-400 font-sansCN leading-relaxed">
            填写这份简短的表单，4 步只需 2 分钟。所有信息严格保密。
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            {/* Progress */}
            <div className="mb-10">
              <div className="flex items-center gap-3">
                {steps.map((s, i) => (
                  <div key={s} className="flex-1 flex items-center gap-3">
                    <div className={cn(
                      "h-8 w-8 rounded-full flex items-center justify-center font-sans text-xs transition-all duration-500",
                      i < step ? "bg-rose-400 text-ivory-100" : i === step ? "bg-ink-800 text-ivory-100" : "bg-ivory-200 text-ink-400"
                    )}>
                      {i < step ? <Check size={14} /> : i + 1}
                    </div>
                    <div className={cn(
                      "text-xs font-sans transition-colors",
                      i === step ? "text-ink-800" : "text-ink-400"
                    )}>
                      {s}
                    </div>
                    {i < steps.length - 1 && <div className={cn("flex-1 h-px transition-colors", i < step ? "bg-rose-400" : "bg-ink-800/10")} />}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[440px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 40 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {step === 0 && <StepService data={data} update={update} />}
                  {step === 1 && <StepPersonal data={data} update={update} />}
                  {step === 2 && <StepHistory data={data} update={update} />}
                  {step === 3 && <StepContact data={data} update={update} />}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <button
                onClick={back}
                disabled={step === 0}
                className="btn-ghost disabled:opacity-30 disabled:cursor-not-allowed"
              >
                上一步
              </button>
              <button
                onClick={next}
                disabled={!canProceed()}
                className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed group"
              >
                {step === 3 ? "提交预约" : "继续"}
                <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 rounded-4xl bg-ivory-200 p-7 space-y-5">
              <div className="font-sans text-[10px] uppercase tracking-wider2 text-rose-400">What to Expect</div>
              <ul className="space-y-4 text-sm text-ink-600 font-sansCN">
                {["60 分钟一对一咨询", "完全保密的环境", "个案管理师全程陪伴", "不构成就医建议", "全程免费"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={14} className="text-rose-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-ink-800/10 pt-5">
                <div className="font-sans text-[10px] uppercase tracking-wider2 text-ink-400 mb-2">需要帮助？</div>
                <div className="font-display text-lg text-ink-800">400 · 866 · 0086</div>
                <div className="text-xs text-ink-400 font-sansCN mt-1">每日 8:00 - 22:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <div className="mb-5">
      <label className="block text-xs font-sans uppercase tracking-wider2 text-ink-400 mb-2">{label}</label>
      {children}
      {hint && <p className="mt-2 text-xs text-ink-400 font-sansCN">{hint}</p>}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-2xl bg-ivory-50 border border-ink-800/10 px-5 py-3.5 text-base text-ink-800 outline-none transition-all focus:border-rose-300 focus:bg-ivory-50/80 font-sansCN"
    />
  );
}

function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="w-full rounded-2xl bg-ivory-50 border border-ink-800/10 px-5 py-3.5 text-base text-ink-800 outline-none transition-all focus:border-rose-300 focus:bg-ivory-50/80 font-sansCN resize-none"
    />
  );
}

function StepService({ data, update }: { data: FormData; update: <K extends keyof FormData>(k: K, v: FormData[K]) => void }) {
  return (
    <div>
      <h2 className="font-display text-2xl lg:text-3xl text-ink-800 mb-2">想了解哪项服务？</h2>
      <p className="text-sm text-ink-400 font-sansCN mb-7">可以多选，个案管理师会为你说明适合的方向。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.map((s) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => update("service", s.slug)}
            className={cn(
              "text-left rounded-2xl p-5 border transition-all duration-300",
              data.service === s.slug
                ? "bg-rose-100 border-rose-300 shadow-soft"
                : "bg-ivory-50 border-ink-800/10 hover:border-ink-800/25"
            )}
          >
            <div className="font-sans text-[10px] uppercase tracking-wider2 text-gold-400 mb-1">{s.tagline}</div>
            <div className="font-display text-lg text-ink-800">{s.name}</div>
            <div className="text-xs text-ink-400 mt-1.5 line-clamp-1 font-sansCN">{s.shortDesc}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepPersonal({ data, update }: { data: FormData; update: <K extends keyof FormData>(k: K, v: FormData[K]) => void }) {
  return (
    <div>
      <h2 className="font-display text-2xl lg:text-3xl text-ink-800 mb-2">让我们认识你</h2>
      <p className="text-sm text-ink-400 font-sansCN mb-7">基础信息将用于核对与回访。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="姓名 / 称呼">
          <Input value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="王女士" />
        </Field>
        <Field label="年龄">
          <Input value={data.age} onChange={(e) => update("age", e.target.value)} placeholder="32" type="number" />
        </Field>
        <Field label="所在城市" >
          <Input value={data.city} onChange={(e) => update("city", e.target.value)} placeholder="上海" />
        </Field>
        <Field label="婚姻状态">
          <div className="grid grid-cols-3 gap-2">
            {[
              { v: "single", l: "未婚" },
              { v: "married", l: "已婚" },
              { v: "divorced", l: "离异" },
            ].map((opt) => (
              <button
                key={opt.v}
                type="button"
                onClick={() => update("partner", opt.v)}
                className={cn(
                  "rounded-full py-3 text-sm transition-all border",
                  data.partner === opt.v ? "bg-ink-800 text-ivory-100 border-ink-800" : "bg-ivory-50 text-ink-600 border-ink-800/10 hover:border-ink-800/30"
                )}
              >
                {opt.l}
              </button>
            ))}
          </div>
        </Field>
      </div>
    </div>
  );
}

function StepHistory({ data, update }: { data: FormData; update: <K extends keyof FormData>(k: K, v: FormData[K]) => void }) {
  return (
    <div>
      <h2 className="font-display text-2xl lg:text-3xl text-ink-800 mb-2">备孕情况</h2>
      <p className="text-sm text-ink-400 font-sansCN mb-7">为了给出更合适的建议，告诉我们一些情况（选填）。</p>
      <Field label="已备孕多久" hint="如：3 个月 / 1 年 / 3 年">
        <Input value={data.duration} onChange={(e) => update("duration", e.target.value)} placeholder="1 年" />
      </Field>
      <Field label="是否曾尝试过辅助生殖？">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { v: "no", l: "未尝试" },
            { v: "iui", l: "IUI" },
            { v: "ivf", l: "IVF" },
            { v: "other", l: "其他" },
          ].map((opt) => (
            <button
              key={opt.v}
              type="button"
              onClick={() => update("previousIVF", opt.v)}
              className={cn(
                "rounded-full py-3 text-sm transition-all border",
                data.previousIVF === opt.v ? "bg-ink-800 text-ivory-100 border-ink-800" : "bg-ivory-50 text-ink-600 border-ink-800/10 hover:border-ink-800/30"
              )}
            >
              {opt.l}
            </button>
          ))}
        </div>
      </Field>
      <Field label="想告诉我们的（选填）" hint="任何特殊情况、过敏、情绪状态等">
        <TextArea rows={4} value={data.notes} onChange={(e) => update("notes", e.target.value)} placeholder="…" />
      </Field>
    </div>
  );
}

function StepContact({ data, update }: { data: FormData; update: <K extends keyof FormData>(k: K, v: FormData[K]) => void }) {
  return (
    <div>
      <h2 className="font-display text-2xl lg:text-3xl text-ink-800 mb-2">如何联系你？</h2>
      <p className="text-sm text-ink-400 font-sansCN mb-7">我们承诺：不会发送任何广告、不会分享给第三方。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="手机号">
          <Input value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+86 138 0000 0000" type="tel" />
        </Field>
        <Field label="邮箱（选填）">
          <Input value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" type="email" />
        </Field>
        <Field label="偏好回访时间">
          <div className="grid grid-cols-3 gap-2">
            {[
              { v: "morning", l: "上午" },
              { v: "afternoon", l: "下午" },
              { v: "evening", l: "晚上" },
            ].map((opt) => (
              <button
                key={opt.v}
                type="button"
                onClick={() => update("preferredTime", opt.v)}
                className={cn(
                  "rounded-full py-3 text-sm transition-all border",
                  data.preferredTime === opt.v ? "bg-ink-800 text-ivory-100 border-ink-800" : "bg-ivory-50 text-ink-600 border-ink-800/10 hover:border-ink-800/30"
                )}
              >
                {opt.l}
              </button>
            ))}
          </div>
        </Field>
      </div>
    </div>
  );
}
