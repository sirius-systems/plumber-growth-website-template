/**
 * Homepage "Common problems we solve" content (docs/04 §6). Client
 * implementations can override this array. `icon` is a Lucide icon name resolved
 * via components/ui/LucideIcon.
 */
export interface HomeProblem {
  icon: string;
  title: string;
  description: string;
}

export const homeProblems: HomeProblem[] = [
  {
    icon: "Flame",
    title: "No hot water or failing water heater",
    description: "No hot water, leaks, or a tank near the end of its life.",
  },
  {
    icon: "Droplets",
    title: "Slow or clogged drains",
    description: "Kitchen, bath, and floor drains that back up or drain slowly.",
  },
  {
    icon: "AlertTriangle",
    title: "Burst or leaking pipes",
    description: "Sudden bursts, corroded lines, and pinhole leaks.",
  },
  {
    icon: "Search",
    title: "Hidden leaks and slab leaks",
    description: "Unexplained water-bill spikes and warm spots on the floor.",
  },
  {
    icon: "Wind",
    title: "Running or leaking toilets",
    description: "Constant running, weak flush, or water pooling at the base.",
  },
  {
    icon: "Gauge",
    title: "Low water pressure",
    description: "Weak flow from mineral buildup, valves, or supply issues.",
  },
];
