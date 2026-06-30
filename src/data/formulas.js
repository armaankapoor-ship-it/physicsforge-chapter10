export const formulas = [
  {
    "id": "path-bright",
    "title": "Constructive Interference",
    "formula": "Delta x = n lambda",
    "display": "Delta x = n lambda",
    "symbols": [
      [
        "Delta x",
        "path difference",
        "m"
      ],
      [
        "lambda",
        "wavelength",
        "m"
      ]
    ],
    "meaning": "Bright fringe condition.",
    "dimension": "m",
    "graph": "Bright order increases with path difference.",
    "trap": "n=0 is central bright.",
    "easyExample": "Easy example: substitute correctly in Delta x = n lambda after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Bright fringe condition.\".",
    "jeeExample": "JEE Main pattern: combine Delta x = n lambda with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: n=0 is central bright."
  },
  {
    "id": "path-dark",
    "title": "Destructive Interference",
    "formula": "Delta x = (2n+1)lambda/2",
    "display": "Delta x = (2n+1)lambda/2",
    "symbols": [
      [
        "n",
        "order",
        "0,1,2..."
      ]
    ],
    "meaning": "Dark fringe condition.",
    "dimension": "m",
    "graph": "Odd half multiples give darkness.",
    "trap": "Do not use n lambda.",
    "easyExample": "Easy example: substitute correctly in Delta x = (2n+1)lambda/2 after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Dark fringe condition.\".",
    "jeeExample": "JEE Main pattern: combine Delta x = (2n+1)lambda/2 with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Do not use n lambda."
  },
  {
    "id": "phase-path",
    "title": "Phase-Path Relation",
    "formula": "Delta phi = 2 pi Delta x/lambda",
    "display": "Delta phi = 2 pi Delta x/lambda",
    "symbols": [
      [
        "Delta phi",
        "phase difference",
        "rad"
      ]
    ],
    "meaning": "Converts path difference into phase.",
    "dimension": "radian",
    "graph": "Phase grows with path.",
    "trap": "Use radians.",
    "easyExample": "Easy example: substitute correctly in Delta phi = 2 pi Delta x/lambda after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Converts path difference into phase.\".",
    "jeeExample": "JEE Main pattern: combine Delta phi = 2 pi Delta x/lambda with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Use radians."
  },
  {
    "id": "ydse",
    "title": "YDSE Bright Condition",
    "formula": "d sin theta = n lambda",
    "display": "d sin theta = n lambda",
    "symbols": [
      [
        "d",
        "slit separation",
        "m"
      ],
      [
        "theta",
        "angle",
        "rad"
      ]
    ],
    "meaning": "Angular bright fringe condition.",
    "dimension": "m",
    "graph": "Small theta gives y/D.",
    "trap": "Small-angle approximation often used.",
    "easyExample": "Easy example: substitute correctly in d sin theta = n lambda after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Angular bright fringe condition.\".",
    "jeeExample": "JEE Main pattern: combine d sin theta = n lambda with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Small-angle approximation often used."
  },
  {
    "id": "fringe-width",
    "title": "Fringe Width",
    "formula": "beta = lambda D/d",
    "display": "beta = lambda D/d",
    "symbols": [
      [
        "beta",
        "fringe width",
        "m"
      ],
      [
        "D",
        "screen distance",
        "m"
      ]
    ],
    "meaning": "Spacing between consecutive fringes.",
    "dimension": "m",
    "graph": "beta grows with lambda and D.",
    "trap": "d in metre.",
    "easyExample": "Easy example: substitute correctly in beta = lambda D/d after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Spacing between consecutive fringes.\".",
    "jeeExample": "JEE Main pattern: combine beta = lambda D/d with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: d in metre."
  },
  {
    "id": "angular-width",
    "title": "Angular Fringe Width",
    "formula": "theta = lambda/d",
    "display": "theta = lambda/d",
    "symbols": [
      [
        "theta",
        "angular fringe width",
        "rad"
      ]
    ],
    "meaning": "Angular separation of fringes.",
    "dimension": "rad",
    "graph": "Independent of D.",
    "trap": "Small angle only.",
    "easyExample": "Easy example: substitute correctly in theta = lambda/d after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Angular separation of fringes.\".",
    "jeeExample": "JEE Main pattern: combine theta = lambda/d with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Small angle only."
  },
  {
    "id": "interference-intensity",
    "title": "Interference Intensity",
    "formula": "I = I1 + I2 + 2sqrt(I1I2)cos phi",
    "display": "I = I1 + I2 + 2sqrt(I1I2)cos phi",
    "symbols": [
      [
        "I",
        "resultant intensity",
        "W m^-2"
      ],
      [
        "phi",
        "phase difference",
        "rad"
      ]
    ],
    "meaning": "Intensity from coherent superposition.",
    "dimension": "W/m^2",
    "graph": "Cosine variation.",
    "trap": "Amplitudes superpose.",
    "easyExample": "Easy example: substitute correctly in I = I1 + I2 + 2sqrt(I1I2)cos phi after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Intensity from coherent superposition.\".",
    "jeeExample": "JEE Main pattern: combine I = I1 + I2 + 2sqrt(I1I2)cos phi with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Amplitudes superpose."
  },
  {
    "id": "equal-intensity",
    "title": "Equal Source Intensity",
    "formula": "I = 4I0 cos^2(phi/2)",
    "display": "I = 4I0 cos^2(phi/2)",
    "symbols": [
      [
        "I0",
        "single-source intensity",
        "W m^-2"
      ]
    ],
    "meaning": "Interference intensity for equal slits.",
    "dimension": "W/m^2",
    "graph": "Max 4I0, min 0.",
    "trap": "Requires equal intensities.",
    "easyExample": "Easy example: substitute correctly in I = 4I0 cos^2(phi/2) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Interference intensity for equal slits.\".",
    "jeeExample": "JEE Main pattern: combine I = 4I0 cos^2(phi/2) with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Requires equal intensities."
  },
  {
    "id": "fringe-shift",
    "title": "Fringe Shift by Sheet",
    "formula": "shift = (mu-1)tD/d",
    "display": "shift = (mu-1)tD/d",
    "symbols": [
      [
        "t",
        "sheet thickness",
        "m"
      ],
      [
        "mu",
        "refractive index",
        "unitless"
      ]
    ],
    "meaning": "Extra optical path shifts pattern.",
    "dimension": "m",
    "graph": "Shift grows with t.",
    "trap": "Sheet in one path.",
    "easyExample": "Easy example: substitute correctly in shift = (mu-1)tD/d after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Extra optical path shifts pattern.\".",
    "jeeExample": "JEE Main pattern: combine shift = (mu-1)tD/d with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Sheet in one path."
  },
  {
    "id": "diff-min",
    "title": "Single Slit Minima",
    "formula": "a sin theta = m lambda",
    "display": "a sin theta = m lambda",
    "symbols": [
      [
        "a",
        "slit width",
        "m"
      ],
      [
        "m",
        "order",
        "1,2..."
      ]
    ],
    "meaning": "Diffraction minima condition.",
    "dimension": "m",
    "graph": "Minima move with lambda/a.",
    "trap": "m starts at 1.",
    "easyExample": "Easy example: substitute correctly in a sin theta = m lambda after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Diffraction minima condition.\".",
    "jeeExample": "JEE Main pattern: combine a sin theta = m lambda with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: m starts at 1."
  },
  {
    "id": "central-width",
    "title": "Central Maximum Width",
    "formula": "width = 2 lambda D/a",
    "display": "width = 2 lambda D/a",
    "symbols": [
      [
        "width",
        "central maximum width",
        "m"
      ]
    ],
    "meaning": "Width of central diffraction maximum.",
    "dimension": "m",
    "graph": "Narrower slit wider maximum.",
    "trap": "This is central maximum, not fringe width.",
    "easyExample": "Easy example: substitute correctly in width = 2 lambda D/a after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Width of central diffraction maximum.\".",
    "jeeExample": "JEE Main pattern: combine width = 2 lambda D/a with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: This is central maximum, not fringe width."
  },
  {
    "id": "resolution",
    "title": "Rayleigh Criterion",
    "formula": "theta_min = 1.22 lambda/D",
    "display": "theta_min = 1.22 lambda/D",
    "symbols": [
      [
        "D",
        "aperture diameter",
        "m"
      ]
    ],
    "meaning": "Minimum angular separation resolved.",
    "dimension": "rad",
    "graph": "Bigger aperture improves resolution.",
    "trap": "D is aperture, not screen distance.",
    "easyExample": "Easy example: substitute correctly in theta_min = 1.22 lambda/D after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Minimum angular separation resolved.\".",
    "jeeExample": "JEE Main pattern: combine theta_min = 1.22 lambda/D with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: D is aperture, not screen distance."
  },
  {
    "id": "malus",
    "title": "Malus Law",
    "formula": "I = I0 cos^2 theta",
    "display": "I = I0 cos^2 theta",
    "symbols": [
      [
        "theta",
        "angle between axes",
        "degree/radian"
      ]
    ],
    "meaning": "Intensity through analyzer.",
    "dimension": "W/m^2",
    "graph": "Cos squared graph.",
    "trap": "Angle between transmission axes.",
    "easyExample": "Easy example: substitute correctly in I = I0 cos^2 theta after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Intensity through analyzer.\".",
    "jeeExample": "JEE Main pattern: combine I = I0 cos^2 theta with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Angle between transmission axes."
  },
  {
    "id": "brewster",
    "title": "Brewster Law",
    "formula": "tan iB = mu",
    "display": "tan iB = mu",
    "symbols": [
      [
        "iB",
        "Brewster angle",
        "degree"
      ]
    ],
    "meaning": "Angle for complete polarization by reflection.",
    "dimension": "unitless",
    "graph": "iB increases with mu.",
    "trap": "Reflected/refracted rays perpendicular.",
    "easyExample": "Easy example: substitute correctly in tan iB = mu after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Angle for complete polarization by reflection.\".",
    "jeeExample": "JEE Main pattern: combine tan iB = mu with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Reflected/refracted rays perpendicular."
  }
]

export const formulaGroups = [
  {
    "title": "Wavefronts",
    "formulas": [
      "path-bright",
      "path-dark",
      "phase-path",
      "ydse",
      "fringe-width"
    ]
  },
  {
    "title": "Interference",
    "formulas": [
      "angular-width",
      "interference-intensity",
      "equal-intensity",
      "fringe-shift",
      "diff-min"
    ]
  },
  {
    "title": "Diffraction",
    "formulas": [
      "central-width",
      "resolution",
      "malus",
      "brewster"
    ]
  },
  {
    "title": "Polarization",
    "formulas": []
  }
]

