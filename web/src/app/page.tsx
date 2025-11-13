"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/ui/table";
import { Modal } from "@/components/ui/modal";
import { Alert } from "@/components/ui/alert";

const journeySteps = [
  {
    id: "step-1",
    stage: "Discover",
    title: "Map critical moments",
    description:
      "Collect signals across touchpoints and surface the moments that drive retention.",
    stats: "12 key milestones detected",
    cta: "View the discovery map",
  },
  {
    id: "step-2",
    stage: "Design",
    title: "Compose guided paths",
    description:
      "Drag-and-drop modular cards to orchestrate messaging, media, and embedded resources.",
    stats: "8 curated journeys active",
    cta: "Open the journey builder",
  },
  {
    id: "step-3",
    stage: "Activate",
    title: "Launch dynamic hero states",
    description:
      "Deploy responsive layouts with state-aware components tailored to each audience segment.",
    stats: "4 audience variants live",
    cta: "Preview personalization rules",
  },
  {
    id: "step-4",
    stage: "Measure",
    title: "Track momentum",
    description:
      "Monitor progress, conversion deltas, and completion velocity in real time.",
    stats: "36% lift in completion",
    cta: "Open performance board",
  },
];

const analyticsColumns = [
  { header: "Moment", accessor: "moment" },
  { header: "Conversion", accessor: "conversion" },
  { header: "Velocity", accessor: "velocity" },
  { header: "Confidence", accessor: "confidence" },
] as const;

const analyticsData = [
  {
    moment: "Awareness → Activate",
    conversion: "38%",
    velocity: "2m 14s",
    confidence: "↑ 92%",
  },
  {
    moment: "Activate → Onboard",
    conversion: "57%",
    velocity: "5m 08s",
    confidence: "↑ 88%",
  },
  {
    moment: "Onboard → Retain",
    conversion: "71%",
    velocity: "6m 44s",
    confidence: "↗ 79%",
  },
  {
    moment: "Retain → Advocate",
    conversion: "24%",
    velocity: "3m 12s",
    confidence: "→ 64%",
  },
];

const highlights = [
  {
    label: "Experience score",
    value: "87",
    trend: "+12 vs. last quarter",
  },
  {
    label: "Active journeys",
    value: "16",
    trend: "3 paused for review",
  },
  {
    label: "Audience reach",
    value: "48K",
    trend: "↑ 6.3% week over week",
  },
  {
    label: "Automation coverage",
    value: "92%",
    trend: "All stages instrumented",
  },
];

const resourceCards = [
  {
    id: "resource-1",
    title: "Canvas templates",
    description:
      "Start faster with reusable journey blueprints that mirror proven adoption flows.",
    link: "#",
  },
  {
    id: "resource-2",
    title: "Accessibility checklist",
    description:
      "Verify color contrast, responsive tap targets, and motion preferences before launch.",
    link: "#",
  },
  {
    id: "resource-3",
    title: "Workshop toolkit",
    description:
      "Facilitate cross-team sessions with interactive prompts and live scoring matrices.",
    link: "#",
  },
];

const faqs = [
  {
    question: "How do I align the interface with the journey framework?",
    answer:
      "Use the 12-column layout presets and component variants to keep each touchpoint aligned with step-specific objectives.",
  },
  {
    question: "Can I add bespoke media or live data widgets?",
    answer:
      "Yes, embed external media—such as live charts or recorded walkthroughs—in any card by selecting the media slot within the builder.",
  },
  {
    question: "What accessibility guidelines are supported?",
    answer:
      "Aurora enforces WCAG AA color contrast, minimum 44px touch targets, semantic headings, and keyboard navigation coverage out of the box.",
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-background via-background to-background/60 text-foreground">
      <Navigation />
      <main className="relative overflow-hidden">
        <section
          id="overview"
          className="border-b border-border/60 bg-background/80"
        >
          <div className="container grid grid-cols-12 gap-y-12 gap-x-8 py-24 lg:py-28 xl:py-32">
            <div className="col-span-12 flex flex-col gap-8 lg:col-span-7 lg:pr-8">
              <Alert
                variant="success"
                title="Journey sync live"
                description="All segments are aligned—last run completed 14 minutes ago."
                className="max-w-xl"
              />

              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  Experience operating system
                </p>
                <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl xl:text-[3.5rem]">
                  Orchestrate every touchpoint around the moments that matter.
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Aurora translates your end-to-end journey into a living,
                  responsive interface. Combine modular components, embedded
                  media, and data-aware states to guide people from curiosity to
                  long-term advocacy.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button size="lg">Launch the experience</Button>
                <Button variant="outline" size="lg">
                  Explore the system
                </Button>
                <Button
                  variant="link"
                  size="inline"
                  className="text-sm font-medium"
                  onClick={() => setIsModalOpen(true)}
                >
                  Watch the guided tour
                </Button>
              </div>

              <form className="grid w-full gap-3 rounded-3xl border border-border/70 bg-card/70 p-6 shadow-subtle sm:grid-cols-3 sm:items-center">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold uppercase tracking-widest text-muted-foreground"
                  >
                    Request curated walkthrough
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="you@productteam.com"
                    aria-label="Email address"
                  />
                </div>
                <Button size="md" className="w-full sm:mt-8">
                  Notify me
                </Button>
              </form>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[36px] border border-border/70 bg-card shadow-subtle">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <iframe
                    title="Aurora platform overview"
                    src="https://www.youtube.com/embed/jfKfPfyJRdk"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                    loading="lazy"
                  />
                </div>
                <div className="grid flex-1 grid-cols-2 gap-4 p-6 lg:p-8">
                  {highlights.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-1 rounded-2xl border border-border/60 bg-background/60 p-4"
                    >
                      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="text-2xl font-semibold text-foreground">
                        {item.value}
                      </span>
                      <span className="text-xs text-primary">{item.trend}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="journey"
          className="border-b border-border/60 bg-card/20 py-24 lg:py-28 xl:py-32"
        >
          <div className="container space-y-12">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
                  Guided journey
                </p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                  Follow the momentum across the four stages.
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Each card below mirrors Aurora&apos;s journey builder. Auto
                  layout keeps responsive structure intact while variant states
                  adapt to progress, sentiment, and channel.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {journeySteps.map((step) => (
                <Card
                  key={step.id}
                  className="col-span-12 flex flex-col gap-6 bg-card/85 md:col-span-6 xl:col-span-3"
                >
                  <CardHeader className="gap-3">
                    <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                      {step.stage}
                    </span>
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-2xl bg-gradient-to-br from-muted/70 via-muted/30 to-primary/10 p-6 text-sm font-medium text-foreground shadow-inner">
                      {step.stats}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" size="inline" className="pl-0">
                      {step.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="insights"
          className="border-b border-border/60 bg-background py-24 lg:py-28 xl:py-32"
        >
          <div className="container grid grid-cols-12 gap-10">
            <div className="col-span-12 space-y-6 xl:col-span-5 xl:pr-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                Live analytics
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Real-time visibility into every journey milestone.
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Aurora measures drop-off, velocity, and confidence scores for
                each experience segment. Alerts keep teams aware of shifts,
                while responsive cards surface the exact interactions to refine.
              </p>
              <Alert
                variant="warning"
                title="Momentum dip spotted"
                description="Stage 4 shows lower confidence—schedule a content refresh to stabilize conversions."
              />
              <Card className="bg-card/90">
                <CardHeader className="gap-2">
                  <CardTitle>Weekly highlight</CardTitle>
                  <CardDescription>
                    Highest impact experiment launched at Step 2.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-5 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Personalized tour</span>
                    <span className="font-semibold text-foreground">+18%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Real-time feedback</span>
                    <span className="font-semibold text-foreground">+24%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Community activation</span>
                    <span className="font-semibold text-foreground">+11%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-12 xl:col-span-7">
              <DataTable
                caption="Journey performance snapshot (updated 4 minutes ago)."
                columns={analyticsColumns}
                data={analyticsData}
              />
            </div>
          </div>
        </section>

        <section
          id="resources"
          className="border-b border-border/60 bg-card/15 py-24 lg:py-28 xl:py-32"
        >
          <div className="container space-y-12">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  Resource hub
                </p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                  Drop-in assets to accelerate production.
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Keep content, interactions, and data connections aligned.
                  Each resource supports variant states and responsive
                  constraints for desktop and beyond.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {resourceCards.map((resource) => (
                <Card
                  key={resource.id}
                  className="col-span-12 flex flex-col gap-6 border-border/80 bg-card/90 md:col-span-6 xl:col-span-4"
                >
                  <div className="h-40 w-full rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(37,_99,_235,_0.25),_rgba(37,_99,_235,_0.05)_60%)]" />
                  <CardHeader className="gap-3">
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link
                      href={resource.link}
                      className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      Open resource library
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="border-b border-border/60 bg-background py-24 lg:py-28 xl:py-32"
        >
          <div className="container grid grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Answers for smooth launches.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Still exploring? Reach out to our experience strategists for an
                alignment workshop tailored to your journey map.
              </p>
              <Button className="mt-6 w-full sm:w-auto">Talk to a guide</Button>
            </div>
            <div className="col-span-12 space-y-4 lg:col-span-8">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-3xl border border-border/70 bg-card/90 p-6 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background open:shadow-lg"
                >
                  <summary className="cursor-pointer text-base font-semibold text-foreground marker:text-primary">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-card/30">
        <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">
              Aurora Experience™
            </p>
            <p className="text-xs text-muted-foreground">
              Responsive design system crafted for the full journey lifecycle.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <Link href="#overview" className="hover:text-foreground">
              Hero
            </Link>
            <Link href="#journey" className="hover:text-foreground">
              Journey
            </Link>
            <Link href="#insights" className="hover:text-foreground">
              Insights
            </Link>
            <Link href="#resources" className="hover:text-foreground">
              Resources
            </Link>
            <Link href="#faq" className="hover:text-foreground">
              FAQ
            </Link>
          </div>
        </div>
      </footer>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Preview the guided onboarding"
        description="See how Aurora layers content, micro-interactions, and analytics inside a single responsive frame."
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
            <Button>Book a live demo</Button>
          </>
        }
      >
        <p>
          This preview mirrors the desktop 1440px layout. Resize to see how auto
          layout and constraints adapt inputs, cards, and table structures.
        </p>
        <p>
          Need to share feedback? Attach time-coded comments and Aurora will map
          them to the relevant journey step automatically.
        </p>
      </Modal>
    </div>
  );
}
