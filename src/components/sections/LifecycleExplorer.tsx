"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { lifecycleStages, type LifecycleStageId } from "@/content/lifecycle";
import { capabilities } from "@/content/capabilities";

/**
 * The lifecycle explorer.
 *
 * Implemented as a WAI-ARIA tablist: arrow keys move between stages, Home
 * and End jump to the ends, and the panel is associated with its tab. On
 * narrow screens the track scrolls horizontally rather than collapsing,
 * which keeps the left-to-right progression — the whole point of the
 * component — intact on mobile.
 */
export function LifecycleExplorer() {
  const [activeId, setActiveId] = useState<LifecycleStageId>(lifecycleStages[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = lifecycleStages.findIndex((stage) => stage.id === activeId);
  const activeStage = lifecycleStages[activeIndex];
  const stageCapabilities = capabilities.filter((capability) =>
    capability.lifecycleStages.includes(activeId),
  );

  function focusTab(index: number) {
    const bounded = (index + lifecycleStages.length) % lifecycleStages.length;
    setActiveId(lifecycleStages[bounded].id);
    tabRefs.current[bounded]?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent, index: number) {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        focusTab(index + 1);
        break;
      case "ArrowLeft":
        event.preventDefault();
        focusTab(index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(lifecycleStages.length - 1);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      {/* Stage track. Scrolls horizontally on narrow screens. */}
      <div className="-mx-6 overflow-x-auto px-6 pb-2 lg:mx-0 lg:overflow-visible lg:px-0">
        <div
          role="tablist"
          aria-label="MedTech lifecycle stages"
          className="flex min-w-[46rem] gap-1.5 lg:min-w-0"
        >
          {lifecycleStages.map((stage, index) => {
            const isActive = stage.id === activeId;
            return (
              <button
                key={stage.id}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                role="tab"
                id={`lifecycle-tab-${stage.id}`}
                aria-selected={isActive}
                aria-controls={`lifecycle-panel-${stage.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(stage.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={`group flex flex-1 flex-col items-start rounded-xl border px-4 py-3.5 text-left transition-[background-color,border-color,transform] duration-200 ease-out-quiet active:scale-[0.98] ${
                  isActive
                    ? "border-accent-400/40 bg-accent-500/15"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                <span
                  className={`text-[0.7rem] font-semibold tabular-nums ${
                    isActive ? "text-accent-200" : "text-ink-300"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`mt-1.5 text-sm font-semibold ${isActive ? "text-white" : "text-ink-200"}`}
                >
                  {stage.label}
                </span>
                <span className="mt-1 text-xs leading-snug text-ink-300">{stage.summary}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Panel */}
      <div
        role="tabpanel"
        id={`lifecycle-panel-${activeStage.id}`}
        aria-labelledby={`lifecycle-tab-${activeStage.id}`}
        tabIndex={0}
        className="mt-6 rounded-panel border border-white/10 bg-white/[0.04] p-6 sm:p-8"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <h3 className="type-h3 text-white">{activeStage.label}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-200 sm:text-base">
              {activeStage.detail}
            </p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-ink-300">
              Questions that surface here
            </p>
            <ul className="mt-3 space-y-2">
              {activeStage.questions.map((question) => (
                <li key={question} className="flex gap-2.5 text-sm leading-relaxed text-ink-200">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                  {question}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-300">
              Capabilities that engage here
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {stageCapabilities.map((capability) => (
                <li key={capability.slug}>
                  <Link
                    href={`/capabilities/${capability.slug}`}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-ink-100 transition-[background-color,border-color,transform] duration-200 hover:border-accent-400/50 hover:bg-accent-500/15 hover:text-white active:scale-[0.97]"
                  >
                    {capability.shortTitle}
                    <ArrowRight className="cta-arrow h-3 w-3 opacity-60" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
