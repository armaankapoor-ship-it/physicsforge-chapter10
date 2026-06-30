export const visualPlans = [
  {
    "id": "wavefront-1",
    "title": "Wavefront Visual",
    "category": "Diagram",
    "diagramType": "wavefront",
    "shows": "A self-made SVG visual for Wavefront showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "phase",
      "constant"
    ],
    "concept": "A wavefront is a surface of constant phase.",
    "removesConfusion": "Rays are normal to wavefronts.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write phase = constant below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"wavefront\" draws this with free SVG inside React."
  },
  {
    "id": "huygens-2",
    "title": "Huygens Principle Visual",
    "category": "Diagram",
    "diagramType": "huygens",
    "shows": "A self-made SVG visual for Huygens Principle showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "new",
      "wavefront",
      "envelope"
    ],
    "concept": "Every point on a wavefront acts as a source of secondary wavelets.",
    "removesConfusion": "Wavefront normal gives ray direction.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write new wavefront = envelope below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"huygens\" draws this with free SVG inside React."
  },
  {
    "id": "ydse-interference-3",
    "title": "Reflection by Huygens Principle Visual",
    "category": "Diagram",
    "diagramType": "ydse-interference",
    "shows": "A self-made SVG visual for Reflection by Huygens Principle showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "i",
      "r"
    ],
    "concept": "Huygens construction explains law of reflection.",
    "removesConfusion": "Angles are from normal.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write i = r below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"ydse-interference\" draws this with free SVG inside React."
  },
  {
    "id": "fringe-graph-4",
    "title": "Refraction by Huygens Principle Visual",
    "category": "Graph",
    "diagramType": "fringe-graph",
    "shows": "A self-made SVG visual for Refraction by Huygens Principle showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "sin",
      "i",
      "sin",
      "r",
      "v1",
      "v2"
    ],
    "concept": "Refraction arises from different wave speeds in media.",
    "removesConfusion": "Speed ratio links to refractive index inverse.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write sin i/sin r = v1/v2 below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"fringe-graph\" draws this with free SVG inside React."
  },
  {
    "id": "path-difference-5",
    "title": "Coherent Sources Visual",
    "category": "Diagram",
    "diagramType": "path-difference",
    "shows": "A self-made SVG visual for Coherent Sources showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "Delta",
      "phi",
      "constant"
    ],
    "concept": "Coherent sources maintain constant phase difference.",
    "removesConfusion": "Independent lamps are not coherent for stable fringes.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write Delta phi = constant below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"path-difference\" draws this with free SVG inside React."
  },
  {
    "id": "diffraction-graph-6",
    "title": "Superposition Principle Visual",
    "category": "Graph",
    "diagramType": "diffraction-graph",
    "shows": "A self-made SVG visual for Superposition Principle showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "y",
      "y1",
      "y2"
    ],
    "concept": "Resultant displacement is algebraic sum of waves.",
    "removesConfusion": "Intensity is not simply amplitude sum.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write y = y1 + y2 below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"diffraction-graph\" draws this with free SVG inside React."
  },
  {
    "id": "polarization-7",
    "title": "Constructive Interference Visual",
    "category": "Diagram",
    "diagramType": "polarization",
    "shows": "A self-made SVG visual for Constructive Interference showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "Delta",
      "x",
      "n",
      "lambda"
    ],
    "concept": "Bright fringes occur when path difference is integral multiple of wavelength.",
    "removesConfusion": "n can be zero for central bright.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write Delta x = n lambda below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"polarization\" draws this with free SVG inside React."
  },
  {
    "id": "malus-graph-8",
    "title": "Destructive Interference Visual",
    "category": "Graph",
    "diagramType": "malus-graph",
    "shows": "A self-made SVG visual for Destructive Interference showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "Delta",
      "x",
      "2n",
      "1",
      "lambda",
      "2"
    ],
    "concept": "Dark fringes occur when path difference is odd half wavelength.",
    "removesConfusion": "Do not use n lambda for dark fringes.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write Delta x = (2n+1)lambda/2 below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"malus-graph\" draws this with free SVG inside React."
  },
  {
    "id": "brewster-9",
    "title": "YDSE Setup Visual",
    "category": "Diagram",
    "diagramType": "brewster",
    "shows": "A self-made SVG visual for YDSE Setup showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "d",
      "sin",
      "theta",
      "n",
      "lambda"
    ],
    "concept": "Two coherent slits create stable interference pattern.",
    "removesConfusion": "Small-angle approximation is used.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write d sin theta = n lambda below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"brewster\" draws this with free SVG inside React."
  },
  {
    "id": "trap-map-10",
    "title": "Fringe Width Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A self-made SVG visual for Fringe Width showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "beta",
      "lambda",
      "D",
      "d"
    ],
    "concept": "Distance between consecutive bright or dark fringes is constant in YDSE.",
    "removesConfusion": "d must be in metre.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write beta = lambda D/d below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" draws this with free SVG inside React."
  },
  {
    "id": "wavefront-11",
    "title": "Angular Fringe Width Visual",
    "category": "Diagram",
    "diagramType": "wavefront",
    "shows": "A self-made SVG visual for Angular Fringe Width showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "theta",
      "lambda",
      "d"
    ],
    "concept": "Angular separation between fringes is lambda/d.",
    "removesConfusion": "Small-angle approximation required.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write theta = lambda/d below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"wavefront\" draws this with free SVG inside React."
  },
  {
    "id": "huygens-12",
    "title": "Intensity in Interference Visual",
    "category": "Diagram",
    "diagramType": "huygens",
    "shows": "A self-made SVG visual for Intensity in Interference showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "I",
      "I1",
      "I2",
      "2sqrt",
      "I1I2",
      "cos"
    ],
    "concept": "Intensity depends on phase difference between waves.",
    "removesConfusion": "Amplitudes, not intensities, superpose.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write I = I1 + I2 + 2sqrt(I1I2)cos phi below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"huygens\" draws this with free SVG inside React."
  },
  {
    "id": "ydse-interference-13",
    "title": "Fringe Shift Visual",
    "category": "Diagram",
    "diagramType": "ydse-interference",
    "shows": "A self-made SVG visual for Fringe Shift showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "shift",
      "mu",
      "1",
      "tD",
      "d"
    ],
    "concept": "Introducing a thin sheet shifts fringes due to extra optical path.",
    "removesConfusion": "Only one path gets extra optical path.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write shift = (mu-1)tD/d below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"ydse-interference\" draws this with free SVG inside React."
  },
  {
    "id": "fringe-graph-14",
    "title": "Diffraction Visual",
    "category": "Graph",
    "diagramType": "fringe-graph",
    "shows": "A self-made SVG visual for Diffraction showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "a",
      "sin",
      "theta",
      "m",
      "lambda"
    ],
    "concept": "Diffraction is bending/spreading of light around obstacles or apertures.",
    "removesConfusion": "Strong when aperture size comparable to wavelength.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write a sin theta = m lambda below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"fringe-graph\" draws this with free SVG inside React."
  },
  {
    "id": "path-difference-15",
    "title": "Single Slit Minima Visual",
    "category": "Diagram",
    "diagramType": "path-difference",
    "shows": "A self-made SVG visual for Single Slit Minima showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "a",
      "sin",
      "theta",
      "m",
      "lambda"
    ],
    "concept": "Single-slit minima occur at a sin theta = m lambda.",
    "removesConfusion": "This gives minima, not maxima.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write a sin theta = m lambda below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"path-difference\" draws this with free SVG inside React."
  },
  {
    "id": "diffraction-graph-16",
    "title": "Central Maximum Width Visual",
    "category": "Graph",
    "diagramType": "diffraction-graph",
    "shows": "A self-made SVG visual for Central Maximum Width showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "width",
      "2",
      "lambda",
      "D",
      "a"
    ],
    "concept": "Central maximum in single-slit diffraction is widest.",
    "removesConfusion": "Narrower slit gives wider central maximum.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write width = 2 lambda D/a below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"diffraction-graph\" draws this with free SVG inside React."
  },
  {
    "id": "polarization-17",
    "title": "Interference vs Diffraction Visual",
    "category": "Diagram",
    "diagramType": "polarization",
    "shows": "A self-made SVG visual for Interference vs Diffraction showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "compare",
      "patterns"
    ],
    "concept": "Interference usually needs coherent sources; diffraction can arise from one slit.",
    "removesConfusion": "Fringe spacing and intensity distribution differ.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write compare patterns below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"polarization\" draws this with free SVG inside React."
  },
  {
    "id": "malus-graph-18",
    "title": "Resolving Power Visual",
    "category": "Graph",
    "diagramType": "malus-graph",
    "shows": "A self-made SVG visual for Resolving Power showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "theta_min",
      "1.22",
      "lambda",
      "D"
    ],
    "concept": "Resolving power is limited by diffraction.",
    "removesConfusion": "Larger aperture improves resolution.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write theta_min = 1.22 lambda/D below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"malus-graph\" draws this with free SVG inside React."
  },
  {
    "id": "brewster-19",
    "title": "Polarization Visual",
    "category": "Diagram",
    "diagramType": "brewster",
    "shows": "A self-made SVG visual for Polarization showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "transverse",
      "wave",
      "property"
    ],
    "concept": "Polarization restricts vibrations of transverse wave to one plane.",
    "removesConfusion": "Longitudinal waves cannot be polarized.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write transverse wave property below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"brewster\" draws this with free SVG inside React."
  },
  {
    "id": "trap-map-20",
    "title": "Plane Polarized Light Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A self-made SVG visual for Plane Polarized Light showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "E",
      "in",
      "one",
      "plane"
    ],
    "concept": "Plane polarized light has electric field oscillations in one plane.",
    "removesConfusion": "Polarizer affects electric field direction.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write E in one plane below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" draws this with free SVG inside React."
  },
  {
    "id": "wavefront-21",
    "title": "Malus Law Visual",
    "category": "Diagram",
    "diagramType": "wavefront",
    "shows": "A self-made SVG visual for Malus Law showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "I",
      "I0",
      "cos",
      "2",
      "theta"
    ],
    "concept": "Intensity through analyzer varies as cos squared of angle.",
    "removesConfusion": "Angle is between transmission axes.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write I = I0 cos^2 theta below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"wavefront\" draws this with free SVG inside React."
  },
  {
    "id": "huygens-22",
    "title": "Brewster Law Visual",
    "category": "Diagram",
    "diagramType": "huygens",
    "shows": "A self-made SVG visual for Brewster Law showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "tan",
      "iB",
      "mu"
    ],
    "concept": "At Brewster angle, reflected light is completely polarized.",
    "removesConfusion": "Reflected and refracted rays are perpendicular.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write tan iB = mu below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"huygens\" draws this with free SVG inside React."
  },
  {
    "id": "ydse-interference-23",
    "title": "Polarization by Reflection Visual",
    "category": "Diagram",
    "diagramType": "ydse-interference",
    "shows": "A self-made SVG visual for Polarization by Reflection showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "i",
      "iB"
    ],
    "concept": "Reflection can polarize light at suitable incidence.",
    "removesConfusion": "Not all angles produce complete polarization.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write i = iB below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"ydse-interference\" draws this with free SVG inside React."
  },
  {
    "id": "fringe-graph-24",
    "title": "Wave Optics Graphs Visual",
    "category": "Graph",
    "diagramType": "fringe-graph",
    "shows": "A self-made SVG visual for Wave Optics Graphs showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "slope",
      "peaks",
      "minima"
    ],
    "concept": "Graphs include intensity versus position, diffraction envelope and Malus curve.",
    "removesConfusion": "Identify maxima/minima condition first.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write slope/peaks/minima below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"fringe-graph\" draws this with free SVG inside React."
  },
  {
    "id": "path-difference-25",
    "title": "Small Angle Approximation Visual",
    "category": "Diagram",
    "diagramType": "path-difference",
    "shows": "A self-made SVG visual for Small Angle Approximation showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "theta",
      "approx",
      "y",
      "D"
    ],
    "concept": "YDSE and diffraction formulas often use sin theta approx tan theta approx theta.",
    "removesConfusion": "Angles must be small and in radians.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write theta approx y/D below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"path-difference\" draws this with free SVG inside React."
  },
  {
    "id": "diffraction-graph-26",
    "title": "Formula Mastery Visual",
    "category": "Graph",
    "diagramType": "diffraction-graph",
    "shows": "A self-made SVG visual for Formula Mastery showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "Delta",
      "x",
      "phi",
      "beta"
    ],
    "concept": "Wave optics combines path difference, phase difference and small angles.",
    "removesConfusion": "Do not mix phase and path difference.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write Delta x, phi, beta below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"diffraction-graph\" draws this with free SVG inside React."
  },
  {
    "id": "polarization-27",
    "title": "Common Conceptual Traps Visual",
    "category": "Diagram",
    "diagramType": "polarization",
    "shows": "A self-made SVG visual for Common Conceptual Traps showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "check",
      "condition"
    ],
    "concept": "Traps involve using bright condition for dark, wrong slit width and missing coherence.",
    "removesConfusion": "Minima formula in diffraction is not bright formula.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write check condition below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"polarization\" draws this with free SVG inside React."
  },
  {
    "id": "malus-graph-28",
    "title": "Board Derivation Focus Visual",
    "category": "Graph",
    "diagramType": "malus-graph",
    "shows": "A self-made SVG visual for Board Derivation Focus showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "derive",
      "beta",
      "minima"
    ],
    "concept": "Boards emphasize Huygens principle, YDSE fringe width and diffraction minima.",
    "removesConfusion": "Draw wavefronts/fringes clearly.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write derive beta, minima below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"malus-graph\" draws this with free SVG inside React."
  },
  {
    "id": "brewster-29",
    "title": "JEE and NEET Graph Focus Visual",
    "category": "Diagram",
    "diagramType": "brewster",
    "shows": "A self-made SVG visual for JEE and NEET Graph Focus showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "I",
      "curve",
      "patterns"
    ],
    "concept": "Competitive questions use fringe graphs, intensity curves and polarization graphs.",
    "removesConfusion": "Central maximum is brightest and widest in diffraction.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write I curve patterns below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"brewster\" draws this with free SVG inside React."
  },
  {
    "id": "trap-map-30",
    "title": "Final Revision Section Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A self-made SVG visual for Final Revision Section showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "top",
      "formulas",
      "traps"
    ],
    "concept": "Final revision compresses wavefronts, interference, diffraction and polarization.",
    "removesConfusion": "Always identify path difference first.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write top formulas + traps below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" draws this with free SVG inside React."
  }
]
