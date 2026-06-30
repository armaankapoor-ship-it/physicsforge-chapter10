export const summaryTables = [
  {
    "title": "Core Formula Table",
    "columns": [
      "Concept",
      "Formula",
      "Unit",
      "Trap"
    ],
    "rows": [
      [
        "Wavefront",
        "phase = constant",
        "concept",
        "Rays are normal to wavefronts."
      ],
      [
        "Huygens Principle",
        "new wavefront = envelope",
        "concept",
        "Wavefront normal gives ray direction."
      ],
      [
        "Reflection by Huygens Principle",
        "i = r",
        "degree",
        "Angles are from normal."
      ],
      [
        "Refraction by Huygens Principle",
        "sin i/sin r = v1/v2",
        "unitless",
        "Speed ratio links to refractive index inverse."
      ],
      [
        "Coherent Sources",
        "Delta phi = constant",
        "radian",
        "Independent lamps are not coherent for stable fringes."
      ],
      [
        "Superposition Principle",
        "y = y1 + y2",
        "m",
        "Intensity is not simply amplitude sum."
      ],
      [
        "Constructive Interference",
        "Delta x = n lambda",
        "m",
        "n can be zero for central bright."
      ],
      [
        "Destructive Interference",
        "Delta x = (2n+1)lambda/2",
        "m",
        "Do not use n lambda for dark fringes."
      ],
      [
        "YDSE Setup",
        "d sin theta = n lambda",
        "m",
        "Small-angle approximation is used."
      ],
      [
        "Fringe Width",
        "beta = lambda D/d",
        "m",
        "d must be in metre."
      ]
    ]
  },
  {
    "title": "Graph and Diagram Patterns",
    "columns": [
      "Topic",
      "Pattern",
      "Exam use"
    ],
    "rows": [
      [
        "Angular Fringe Width",
        "theta = lambda/d",
        "Small-angle approximation required."
      ],
      [
        "Intensity in Interference",
        "I = I1 + I2 + 2sqrt(I1I2)cos phi",
        "Amplitudes, not intensities, superpose."
      ],
      [
        "Fringe Shift",
        "shift = (mu-1)tD/d",
        "Only one path gets extra optical path."
      ],
      [
        "Diffraction",
        "a sin theta = m lambda",
        "Strong when aperture size comparable to wavelength."
      ],
      [
        "Single Slit Minima",
        "a sin theta = m lambda",
        "This gives minima, not maxima."
      ],
      [
        "Central Maximum Width",
        "width = 2 lambda D/a",
        "Narrower slit gives wider central maximum."
      ],
      [
        "Interference vs Diffraction",
        "compare patterns",
        "Fringe spacing and intensity distribution differ."
      ],
      [
        "Resolving Power",
        "theta_min = 1.22 lambda/D",
        "Larger aperture improves resolution."
      ],
      [
        "Polarization",
        "transverse wave property",
        "Longitudinal waves cannot be polarized."
      ],
      [
        "Plane Polarized Light",
        "E in one plane",
        "Polarizer affects electric field direction."
      ]
    ]
  },
  {
    "title": "NEET vs JEE Question Patterns",
    "columns": [
      "Cluster",
      "NEET asks",
      "JEE asks"
    ],
    "rows": [
      [
        "Wavefronts",
        "Formula and NCERT statement from Huygens principle and ray-wave connection.",
        "Numerical, graph, diagram and limiting-case combinations"
      ],
      [
        "Interference",
        "Formula and NCERT statement from Coherence, path difference and YDSE fringes.",
        "Numerical, graph, diagram and limiting-case combinations"
      ],
      [
        "Diffraction",
        "Formula and NCERT statement from Single slit diffraction and resolution.",
        "Numerical, graph, diagram and limiting-case combinations"
      ],
      [
        "Polarization",
        "Formula and NCERT statement from Transverse nature, Malus and Brewster laws.",
        "Numerical, graph, diagram and limiting-case combinations"
      ]
    ]
  }
]

export const memoryHooks = [
  "Bright: path difference n lambda.",
  "Dark: path difference (2n+1)lambda/2.",
  "Fringe width grows with wavelength and D.",
  "Diffraction spreads more for narrower slit.",
  "Polarization proves transverse nature."
]

export const topFormulas = [
  "Delta x = n lambda",
  "Delta x = (2n+1)lambda/2",
  "Delta phi = 2 pi Delta x/lambda",
  "d sin theta = n lambda",
  "beta = lambda D/d",
  "theta = lambda/d",
  "I = I1 + I2 + 2sqrt(I1I2)cos phi",
  "I = 4I0 cos^2(phi/2)",
  "shift = (mu-1)tD/d",
  "a sin theta = m lambda",
  "width = 2 lambda D/a",
  "theta_min = 1.22 lambda/D",
  "I = I0 cos^2 theta",
  "tan iB = mu"
]

export const topConcepts = [
  "Wavefront: A wavefront is a surface of constant phase.",
  "Huygens Principle: Every point on a wavefront acts as a source of secondary wavelets.",
  "Reflection by Huygens Principle: Huygens construction explains law of reflection.",
  "Refraction by Huygens Principle: Refraction arises from different wave speeds in media.",
  "Coherent Sources: Coherent sources maintain constant phase difference.",
  "Superposition Principle: Resultant displacement is algebraic sum of waves.",
  "Constructive Interference: Bright fringes occur when path difference is integral multiple of wavelength.",
  "Destructive Interference: Dark fringes occur when path difference is odd half wavelength.",
  "YDSE Setup: Two coherent slits create stable interference pattern.",
  "Fringe Width: Distance between consecutive bright or dark fringes is constant in YDSE.",
  "Angular Fringe Width: Angular separation between fringes is lambda/d.",
  "Intensity in Interference: Intensity depends on phase difference between waves.",
  "Fringe Shift: Introducing a thin sheet shifts fringes due to extra optical path.",
  "Diffraction: Diffraction is bending/spreading of light around obstacles or apertures.",
  "Single Slit Minima: Single-slit minima occur at a sin theta = m lambda.",
  "Central Maximum Width: Central maximum in single-slit diffraction is widest.",
  "Interference vs Diffraction: Interference usually needs coherent sources; diffraction can arise from one slit.",
  "Resolving Power: Resolving power is limited by diffraction.",
  "Polarization: Polarization restricts vibrations of transverse wave to one plane.",
  "Plane Polarized Light: Plane polarized light has electric field oscillations in one plane."
]

export const topTraps = [
  "Rays are normal to wavefronts.",
  "Wavefront normal gives ray direction.",
  "Angles are from normal.",
  "Speed ratio links to refractive index inverse.",
  "Independent lamps are not coherent for stable fringes.",
  "Intensity is not simply amplitude sum.",
  "n can be zero for central bright.",
  "Do not use n lambda for dark fringes.",
  "Small-angle approximation is used.",
  "d must be in metre.",
  "Small-angle approximation required.",
  "Amplitudes, not intensities, superpose.",
  "Only one path gets extra optical path.",
  "Strong when aperture size comparable to wavelength.",
  "This gives minima, not maxima."
]

export const topDiagrams = [
  "Wavefront Visual",
  "Huygens Principle Visual",
  "Reflection by Huygens Principle Visual",
  "Refraction by Huygens Principle Visual",
  "Coherent Sources Visual",
  "Superposition Principle Visual",
  "Constructive Interference Visual",
  "Destructive Interference Visual",
  "YDSE Setup Visual",
  "Fringe Width Visual"
]

export const graphPatterns = [
  "Wavefront: graph/variation follows phase = constant.",
  "Huygens Principle: graph/variation follows new wavefront = envelope.",
  "Reflection by Huygens Principle: graph/variation follows i = r.",
  "Refraction by Huygens Principle: graph/variation follows sin i/sin r = v1/v2.",
  "Coherent Sources: graph/variation follows Delta phi = constant.",
  "Superposition Principle: graph/variation follows y = y1 + y2.",
  "Constructive Interference: graph/variation follows Delta x = n lambda.",
  "Destructive Interference: graph/variation follows Delta x = (2n+1)lambda/2.",
  "YDSE Setup: graph/variation follows d sin theta = n lambda.",
  "Fringe Width: graph/variation follows beta = lambda D/d."
]

export const questionTypes = [
  "Direct formula MCQ",
  "Diagram-based sign question",
  "Graph interpretation",
  "Ratio numerical",
  "Statement correction",
  "Assertion-reason",
  "Integer answer",
  "Match-the-column",
  "Case-based reasoning",
  "Limiting-case analysis"
]

export const revisionPlans = {
  "thirtyMinute": [
    "0-5 min: formula sheet and units.",
    "5-10 min: redraw top diagrams.",
    "10-17 min: graph patterns and thresholds.",
    "17-24 min: mixed numericals.",
    "24-30 min: trap list and NCERT alerts."
  ],
  "lastDay": [
    "Revise diagrams and formulas together.",
    "Write key derivations once.",
    "Solve one mixed practice set.",
    "Review common traps.",
    "Sleep; avoid heavy new material."
  ],
  "examHall": [
    "Draw a small diagram.",
    "Write knowns in SI units.",
    "Choose sign/energy/path convention.",
    "Apply formula.",
    "Check limiting case and dimensions."
  ]
}

export const finalChecklist = [
  "I can explain, draw and solve Wavefront.",
  "I can explain, draw and solve Huygens Principle.",
  "I can explain, draw and solve Reflection by Huygens Principle.",
  "I can explain, draw and solve Refraction by Huygens Principle.",
  "I can explain, draw and solve Coherent Sources.",
  "I can explain, draw and solve Superposition Principle.",
  "I can explain, draw and solve Constructive Interference.",
  "I can explain, draw and solve Destructive Interference.",
  "I can explain, draw and solve YDSE Setup.",
  "I can explain, draw and solve Fringe Width.",
  "I can explain, draw and solve Angular Fringe Width.",
  "I can explain, draw and solve Intensity in Interference."
]
