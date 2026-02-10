import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'fsae-combustion',
    title: 'Longhorn Racing Internal Combustion - Composites',
    category: 'Composites Manufacturing',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNdfp8VN2JIsoAWf3W77PuvKl8JLhXY7LBA5PGGDPH47juCFYpPIqjEWcNcr15lUMrsLOcfcjs5JMBmWpwUTYkzx5g8FqqAkIN1izBFBY2GDIcwV72x6CRMyKrtIPyUx1AOkFIm5eJKfq4UEya5BjGi=w1080-h899-s-no-gm?authuser=0',
    description: 'Freshman year composites lead for the FSAE Internal Combustion team, focusing on aerodynamics and bodywork.',
    longDescription: 'My freshman year, I joined my university\'s FSAE composites team in Longhorn Racing Combustion. Countless hours of production and assembling composite components for our car left an impactful start in igniting my ambitions for manufacturing systems through engineering. It has been an excellent opportunity to get hands-on experience in the field and get exposed to the world of composite components, material engineering, and working in a team environment with other subsystems.',
    technologies: ['Prepreg/Dry Weave Layup', 'Monocoque Design', 'FEA', 'Failure Analysis', 'Custom Molds', 'Vacuum Bagging'],
    socialLinks: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/company/longhorn-racing/posts/?feedView=all' },
      { label: 'Instagram', url: 'https://www.instagram.com/longhornracing/' }
    ],
    keyFeatures: [
      'Mastered various manufacturing methods including prepreg, wet layup, and forged carbon, adapting techniques to specific performance requirements',
      'Converted heavy metallic parts (firewall, mounts) from other subsystems to carbon fiber composites, achieving significant weight reduction while maintaining structural integrity',
      'Executed rigorous material testing including 3-point bending tests on sandwich panels (Nomex Honeycomb/Roacell foam) to meet FSAE safety requirements',
      'Integrated topology optimization for airfoil mounts, utilizing waterjet-cut aluminum plates to eliminate unnecessary material and weight'
    ],
    metrics: [
      { label: 'Production', value: '1.5x Speed' },
      { label: 'Weight Red.', value: 'Up to 70%' },
      { label: 'F.O.S.', value: '> 2.0' }
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/pw/AP1GczMdmXZfMXK_4kC4yxxwOImb0zdiGtDjRUCuRDDszT5ceBxxGOju-co3peHFcqJYhYeG2Npul56Q6rbBe8cNZ32Fs7cfQ4qGIQxUT1Fm7PI8X4fR-ZdvGAhwlWym9PmzztczZVCdYKVJVvkQpLgK9yul=w1080-h1080-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczO1RM0xO31vAAN6hmu0mI_a9VuAL0HLapdqXJPeS9o_mfNm8wB420YxhTt578c-_g5qBvQ1-u3Ef8O3yMnmISSH2abxIlae-ntNnRHxGgdLn6xf5DVv-zHZ-KrcmQjDrEkAduortmszRfZit-HWpN4G=w1080-h899-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPNgEMSyHLGOpemS4o3gPEch4ixkYP6QDDjxgQuR9HaFlVVYaEyq7LdPY6avTjK6bx2dXsAMPv8EnUfx7iiCbI9EMZRCmlYL58IGrEEN-Go5Fn_CUrcjEln8v1ZyFThypSyhdpPpzUdCTf18v4JyArr=w1014-h1352-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPItKYBhorIDpJEbJpoSq45oWqjoB1yZXpNY_QfUHT1qxyLFh4psLM_-SOUuTACIe0iNW4R9NL3vwM-p8XZgcKajcnDYPNCEjjIwY9CEgfLqAqCzeKYzCz5-5_b3XH32XGl7wMC_WTfUj8fj_S7-Nzm=w1014-h1352-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczN4qHfPe3WmLbeUjMpQlhoev8pHBHEjoTLGpc9vC4aKZmCwebDoBNjvA26f33Mbbp1bDWeVuj3pCj2LC8tV640qOvtxJEilfFfdFGIM0drIdi7twzTgRqBYExaUf7SCpHPnUl9T_qbVx3QiRQ2LdLFa=w1014-h1352-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPOqr8FGw897EkftJqRMZpy-l8yd-xJZmJEVIcPOI_uyhxLaxXfZAfPG99DEDgsxMq20TL0OeKQs_sRoERjF4uwyyMpQzgK5_LShKwzTSeghOYFzfVzQutCrNhvDxnCdheVMc4JaNEX8ZTP6aMfHb91=w1014-h1352-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNVgopnFsBBvA_5jgdXUGvJk7zBxOivDfbEW69WgwGXTM4CT3CQbpVOJx51EANUVEweG8vIMeXunubgVc-KY7h-yk3DPG07513C3qiFA94x515DG41BmC13P5yyriamk6wH60KqWmwoI5xczc3VfxSX=w1718-h1289-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMbKSsK5ItnEStGG6KLF6rtQfzr9bFCF-aZdJikdlkG37k0tQAx6EXfqZwQeJOIGI7DXj147lZ2uJxFECiYrGP-EkOkfuSwQ4HD9FqBb5oU3k55jCTwK8iJmFgwcAr4Ofa7yX7q6mTfp9CeNbjoqOh1=w1014-h1352-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOCSi04WRZB0ka3kKPTNqAVYT5RSwCRiMk2hlvdCGkWfd71AsJ6M2bdrWWngemdhjukqgA0l5BiJULJQ98LFMHUr2ypdNmMSoNUXp5lp2YrdEeydYMmEriQWXRvqFI8b0iZ0XNoVi_8MYm0pm8PfHX=w1014-h1352-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNdASte_09Td5fivzHwaUTyBbpIVe5vgI3VZVaD0ygVNpq2EpGbiH2bmo1YVZdBEflJ2xJ1e785IQXr9xcDt_F6VNbdzZZPQYmhL856c8FEm_Kubpq-zvFtOqlOATkWEllfvaH9BnbXGdWWfaHdS29T=w1014-h1352-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPXTHnG3PRFsfUcGiNdl7GAWl17XF_nX2_LYNzyeySjFTmeurVahaA2z4QoCAWpIqF668Gmu7k1crWGh9b0RUMZ17cHLHOs7xc0sNapWrKW4toJk1pD4H0bmGV_Q0RoKxcgAUOZUA3pPQtCJKEREnzU=w1014-h1352-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczP1bA34hElWSbAYr3kT0kT-ffxnDsPJb2_-231Kkl6Uz00YRrGu4SSAerYeviCU1NdtBMmr_HA-mQltBa-xKqD_rNQwOd-5z8MUTQaqGjBjLeshOm1Cd_Qj2ki9rqeddIDgl3Bdc2tlqz8AvUP09xAF=w1014-h1352-s-no-gm?authuser=0'
    ]
  },
  {
    id: 'carbon-steering-wheel',
    title: 'FSAE Forged Carbon Steering Wheel',
    category: 'Sophomore Design Project',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczO1gR11C7I90ZZYueqUS1NiPXpRRwrlEPREcDIWtLTeUhw2xnbQ-rJa2rikSFpmpAANQj7d5Q3G4YpE8fEvrFeeYoiDlIrE25bPhDvnxlPGXwcoCVS0pgoSl6TmFwbPyhSxxgQNJBAGZpGNfs1bZMOb=w1014-h1352-s-no-gm?authuser=0',
    description: 'Main personal project sophomore year: Redesigning the steering wheel from a heavy 3D-printed assembly to a lightweight forged carbon structure.',
    longDescription: 'Sophomore year, I took on the redesign of our team\'s steering wheel as my primary technical focus. The legacy design was heavy, aesthetically lacking, and utilized uncomfortable 3D-printed grips that were prone to failure. I led the development of a new ergonomic carbon fiber wheel, iterating through SolidWorks designs and working directly with the drivers to find the most optimal shape for comfort and control. After initial trials with prepreg carbon fiber, I pivoted to SMC (Sheet Molding Compound) / Forged Carbon to achieve the complex geometry of the grips while leveraging its isotropic properties for a more durable and lightweight structure.',
    technologies: ['SolidWorks', 'Femap FEA', 'Forged Carbon (SMC)', 'Prepreg Layup', 'CNC Milling', 'Laser Cutting'],
    keyFeatures: [
      'Designed multiple ergonomic iterations in SolidWorks, conducting user-testing with drivers to finalize a "deep dish" geometry for maximum comfort',
      'Performed structural validation using Femap FEA to verify the rigidity of the handle and central mounting points under high-torque steering loads',
      'Transitioned to Forged Carbon (SMC) to accommodate complex ergonomic shapes that were difficult to achieve with traditional carbon fiber weaving',
      'Integrated a foam core center during the prepreg phase and vacuumed between plies to ensure a high-quality surface finish and void-free laminate',
      'Machined precise mounting holes using a mill and sandblasted custom inserts to ensure a chemical and mechanical bond with the quick-release assembly',
      'Utilized laser-cut templates for rapid prototyping and consistent geometry across manufacturing attempts'
    ],
    metrics: [
      { label: 'Weight Red.', value: '-420g' },
      { label: 'Material', value: 'SMC Forged' },
      { label: 'Analyses', value: 'Femap FEA' }
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/pw/AP1GczOdRr_B0bfn4xJ_5Oee4Nq7Qg3PO7rG_MnPAMIhyZb95DDMlZRFLkXukxfD-QPSzg1FMaywE1qrbjj7HBsofZuBjewLGVk_Q8PxPWw_R8kjGJ8IWrclMpdufc_-JGPXcpL227MvNYIBTekHGgwKQhW5=w525-h358-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOgHht94PCi2WZxDhb8RMmG601Er9wFrUyeyqVDaeQ-MvV20wA8rnV6UbMbfQzVrblyYcvIiLKo7T0eqZNeaILOM_v1swAbVpTDtYFs7Lo3OJM1ZcV0Ok5JNtFJ7LT_d7yHfSBMgTcdOaCEbs1g4ABI=w684-h557-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPfvVGPxE9Nx6wAH4Z56SwPLqEJnAZoqtbkSuo-1slE-owInjIfl9jaKVC2gZDq-oWSMbpNDCeJKLNOlwzTQVD3Rt4zmH6pzwli9DooOhw9JPSvtA55Jaml4MjUltymCHX3cHOZeU6LSDaL-JCno4_5=w1698-h648-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczO9ymJMYLlvEiLow8oUEcBHFnSXfdNf8a-uFF0HoJqZNWDIBLL3mZKkSVYrLI2RezqxND6N5WfXJ7stbTUZxJyVhauYaMuHPTa2x7_6EA588LGSrmLPtElQXMCendv2KnhqiFCfDNgk4rITnRKD4rJj=w1014-h1352-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOuMWr8-Qqwp_6UX1e79iBm3srtKCBv97mi4-b7W_gk1RbDxyRFVz20MMjIca00wd_HMSvgBlTgYO278CFCOWXpxhQ2QDiGojY42Gjlvw__F10IaAeQMBWWkRXUi4SGoKkhL-4eXRukn1D5jpfusiJH=w1014-h1352-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczN2QrR_ZxXz4aKVeQtuCB4EScKDCvQtZ_YafFuWjUQIwnkAgQAfOPHDaQW4BXkprDFLEspTMcbnt2RL95kPalOb4E04IKclEaLoiZP2QNA-SYPp3l9scsMOlW4ruWDtTiEl0tAUB2CBX3pUsaooPntN=w1014-h1352-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMlBKvjxzYYvERKZC6R7Of_gKdOmSSczNQbgvckEBIMP9wFtFn37-kyMNVSX4Q7B0wYCDyyPr_-zc94B9HMTtqAT_Xg_Zy2w6h1QtFgVNCEaf-B2DN4a-44OksQI8NvPvHB01xI48seOWyXGQyuI1tM=w1014-h1352-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMHMyd1Nx4DKogE90jpck_wkSc5E7DJl2X233rszOqS-0oHBunJN7lgValQvybMvrk7Kxw1Z2cY7HMZ_jt4-sXR_WH4lYxwCfIIuO0W5rt4fVDQvmrHzUjesLmlCrFTdxtoREx60sLvuP0nTL-cKJLd=w1014-h1352-s-no-gm?authuser=0'
    ]
  },
  {
    id: 'hydraulic-spacer',
    title: 'Barbee 200T Hydro Modification',
    category: 'Industrial Manufacturing (Emerson)',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPPyk4HL3LHxHg71dinH1HrkadzM4Gpv59xYT9AIFYREm0S408oMc_FvZCNQvm6qY15-PiuJiCLLWBBB1t0f9yNRIJTqjv0nQFFvXj74_I6ltumku36aDXJq92kWGYou8svaVpSpPH4BgMY0bDz8H26=w1718-h1289-s-no-gm?authuser=0',
    description: 'Structural modification of a 200-ton hydraulic press to accommodate testing of smaller precision components.',
    longDescription: 'Led the modification of a 200-ton Barbee Hydro press that was previously underutilized due to a large face-to-face gap. The project required designing a structural attachment/spacer to reduce clearance for QA testing of whisper tubes, SSVs, and rotary components. I managed the project through all phases: from initial maintenance consultation and FEA stress simulation to outsourcing precision machining and final in-house structural welding.',
    technologies: ['FEA Simulation', 'SolidWorks', 'Structural Welding', 'Material Selection', 'Project Management'],
    keyFeatures: [
      'Designed 6 different prototypes and selected the best design based on stress calculations, FEA, and functionality',
      'Conducted specialized FEA on bolt strength to verify shear and tensile capacity, ensuring the 3ft spacer remains secure under high-tonnage cycles',
      'Engineered a custom spacer to withstand 200 tons of compressive force with a Factor of Safety (FOS) > 2.5',
      'Optimized open and closed clearance (5 inches) to support QA testing requirements',
      'Authored comprehensive installation procedures for the heavy structural spacer assembly',
      'Managed a $3.5K capital budget including vendor coordination for precision machining'
    ],
    metrics: [
      { label: 'Max Force', value: '200 Tons' },
      { label: 'F.O.S.', value: '> 2.5' },
      { label: 'Prototypes', value: '6 Models' }
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/pw/AP1GczPfDMh-JnCoe9PtX58zgDDkymYuWcDLdIyV_hodyjsEj-NqBlywq34ge98Pq0nvhNi1X5qqE70tBoreYW6lN3lfoW7-JnSJpWKmBoAg8jEKYDkrmNN-pgHpgTDWJOppUrKZvTsU-jEEmenzqJviVz5T=w1014-h1352-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMsi9POuQAuzaVYQxFQNQYrwz4pRXPFOzzni-JdsfuIWKbY0G1kxxC4Kjynl9yV45f8bdbPS2u9xCickv3EJhCA_oIPx9KFrWeRZSCi_nmQJHBjNmK2zcNy7vxxGjFrcrj9rREjWOE2dQ3eL2ibBLaD=w1718-h1289-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOWCfwpQ8GGuhH0bZDiBiJx0AAIN7MtqMTvRtlMXHxKnDq4Febe-8zGd97DL-NRKGkhpp_O68mSS3SBSYcR1NsaDYw8vKHF4LqVhXDOsLypi-nP8MkBMAgdPvM3Y3DkJHrXCcE8-K8te7_2ZifP8rK=w1718-h1289-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMoIsoiCY1bafStq_c-UjA7Ur0lvFkcLIfWgQx-MMLyH6ojXKdsPO2q9CaG12xUiGxxAvBCI7J0RFZX9YuDDCiKwNrKDhdL15W68nL3N469QQC5POQwHWqCsmt2gNZGLuvf2r1rPuG_mcxsuIhD91XS=w1014-h1352-s-no-gm?authuser=0'
    ]
  },
  {
    id: 'rc-car-machine',
    title: 'Remote Control Car',
    category: 'Machine Elements',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNRBPiUJk5pQfOl7wJ7-eJZcQCxWNYnLju_1yaIu61Ng9qEF8XEQ5ZhtHINWO24wLX2NmpZy0_WAwftLmFZC3V6QDKyr6MD3P_27-gvUTUT24pW44ubR88p-HCfUHQGN-ccO64uqBvzpXoOW6ypY5h2=w1718-h1289-s-no-gm?authuser=0',
    videoUrl: 'https://photos.app.goo.gl/VuqnDho1abo62f379',
    videoThumbnail: 'https://lh3.googleusercontent.com/pw/AP1GczOO_9-tCiDCTq31avxQX9VdLCmf-zMg_VYNxAbobMPeoleaeaebBkux7516zdYabMjEwBofIG7xC29Ny42c2nOjlqQQqb9m6vphNyrHmNO9U9R8pXnqgg0gqwpUGODk8cg1GzzwXkmFx8YXYPaHiFGc=w628-h363-s-no-gm?authuser=0',
    description: '1st Place Machine Elements RC Car with the fastest lap record: 3 laps under 18 seconds.',
    longDescription: 'Developed for the Machine Elements course, this project involved the complete mechanical and structural design of "Mach Futura". The project was a resounding success, winning 1st place in the class competition by achieving the fastest performance of the semester with 3 consecutive laps clocked under 18 seconds. Key engineering decisions included implementing a positive Ackerman steering geometry to reduce tire slip on oval tracks and a TPU-damped suspension system with -1 degree static camber. The powertrain utilizes a rear-mounted solid axle with an open differential, driven by a Traxxas Stinger 540 motor via a precision toothed belt system.',
    technologies: ['SolidWorks', '3D Printing (PLA)', 'Ackerman Geometry', 'Powertrain Design', 'TPU Damping', 'Differential Mechanics'],
    keyFeatures: [
      'Won 1st place in the Machine Elements competition, achieving the fastest cumulative performance of the class with 3 laps under 18 seconds',
      'Implemented positive Ackerman steering geometry to ensure the inner wheel translates sharper than the outer, minimizing slip on oval track layouts',
      'Designed a custom 3D-printed PLA chassis with a Formula 1-inspired aesthetic and integrated aerodynamic airfoils for stability',
      'Engineered a toothed belt drive system with a 1:3 gear ratio to optimize torque delivery from the Traxxas Stinger 540 motor',
      'Utilized TPU (Thermoplastic Polyurethane) sandwich blocks in the suspension design to provide reliable damping and impact absorption',
      'Conducted rigorous performance modeling, calculating a forward acceleration of 0.1396 m/s² using tractive effort equations',
      'Optimized center of mass by placing heavy components (battery and differential) as low as possible to prevent rollovers during high-speed maneuvers'
    ],
    metrics: [
      { label: 'Curb Weight', value: '1596g' },
      { label: 'Gear Ratio', value: '1:3' },
      { label: 'Ground Clear.', value: '17.8mm' },
      { label: 'Max Steering', value: '4.88 rad' }
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/pw/AP1GczOgwu8-pKgaNqY-Rn6RqCO4QpKhVPIjKhAM_BhvQFrEn95NB74ReIhE3kAMVerA4eDXlK6x5xIMOq3rPrGqFN-SOTKTD6mILvt81KYqHhLbiOXJjHa8RBUA_vcCFNm4Z8djddwwkbVxVI20wPlkWqwH=w1472-h952-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNwSfsGJp6f7d2MhWnMCVjzKp1FpQkfia4ImuEDcON-ZUKpJcuYnwCg4iGXlfiF9IqyW1tnPrMCaw4v-CK70_kLPV4n-I2YBEYc3i1YSCM7_sEUhjz54OW6v571Hs695blWaGT-vtyHVxVfArgdhVND=w1718-h1070-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOiRTtpXxI4wBAz5xE3L_uLM0iUjd3gFbpjbjUJbkC8DqoY5xCQMB-KpWLL_0Lv1b-5RwE0tqqTOSv1C2R00-sSoQkGAFPqlK9wJKSnosc87-iNcRHY_sQKfKy25wEUbmbLj74bhpVsN7M59Mqs6cyy=w1718-h1289-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPGwWlTJEBZRqBr5M5dspHFNr20qoL9gm_TKpP6R3YBMpsDmKSg4fYl6UNVLunITJUPKkOraOQa64arkBD3KUOCONkNxlr1dL59-mZ0W5RuU4ejvN0ihxvzp5fDIy_e276-JSB6vlP5x67pJzlYUl0x=w1718-h1289-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPEMUn5DjPKe7svN8F8DITu44H2EJnh-aYfmGeFZMf3tiY8Eg95E8FJQsdQpkoMcYMwoFX7qtIaUBgQFOtaDqeEyvcfLrgqSvzALzD5gqV7J_begxMm5ccJYnn8ae8_maTBb7wBpspUc8JyBOTeT-nM=w1718-h1289-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNcEZ19KMrX3fQLozxx9N5XkKqaNFGszdwhq59IMFas1BCncmYuXff1AnrJYW8hkMsLt8J3GHRSP3JZUH4SMhm-rGXce1Q1Au5c-bx_i2EJgR2TawrE-XB46HhxOSJrr7SJ2LHL5z_BRizhLJwp2YaB=w773-h582-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczP9edky6cxRUYJC8yelDGpoKQwHlvg_e86MA0NUm_cWFMLgcCRnZsc570Uy1BRX8zYIIHKH8PpX-BE49YZeqglyNhhXkBpZcEF0Afb3vwHy_H_8V5B-IVzcNY7wTXpj_rgXORlrbJCTbDcwsphQ2qwE=w708-h415-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPhdvI4CG1Xm-W6qHdPY0K-unw90fEge7bCnVHdOzQnShR3GY0O-sfKWPfvkySTOs-TBebPP5HY_SMkkDXeqoPC96Kn23zOko4B-yLbWWCPd9IJo5gN4dEtqoi1j_VXaLtc6gAW0Ji7Jpt6PIhmznZM=w577-h508-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOVJK4nDbOzo4sRvyWmqGCY--KCAXrbaOG8KoH752GZaDFEblCFhQ-JuESZHYsfLiTKgdZ229BLEeZh9Xe68PGT2h87aXXIKkwCeKllDU8lOT2JohtxNvg6URFfgjXOQ4E9fBLIct_ZutRECQNVZVxc=w826-h899-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNS8Qgg8-CoFxkRvvOaVYviFiVf0GvnQ0tybzPN3Tu7Q5LATwlnJHASD1iNtaiPrvhT0NdoHQImn88dEmRvgU9M37m0DxTDy4tRyaDPj-M2Feue2wtyA24DZjqAxPHWRNPSK8VdX9yQPrJew2KUP-pC=w575-h586-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMwHe1fOZrFgmz5qmb0Jab4AN3r5_5f_ZUZzOEAtqIb-fvL7Gy0n3cEON24W0_zerUkJscUsB8Keq1D187SLYWwSRUQG7-itvMZ44lYW_BTZo5Ym5BhnZ0fpeqJmQRWagDPnrzr73YxNzN6im6ubQl0=w756-h432-s-no-gm?authuser=0'
    ]
  },
  {
    id: 'sim-racing',
    title: 'Sim Racing Chassis',
    category: 'Ergonomic Design',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMI56jgMIh1OBQV-WxNzGba88lstj9EPs9foSLhtac0N5W_bh-boaP0hUq1ZNfTcfpexSIlUJzDTf_aQyfAYEbmArBpveo0p5JGOMMBrP4-02VojTQvIti0sdvgxStF4nX0CZeYy8JF01-XNNKkBwVe=w1014-h1352-s-no-gm?authuser=0',
    description: 'Custom-engineered racing simulator replicating real-world vehicle cockpit ergonomics.',
    longDescription: 'When I started my co-op at Emerson, I finally had a steady source of income, and I naturally wanted to invest it into a technical passion project. I decided to engineer a custom racing simulator from the ground up, designed to mirror the exact spatial dimensions and seating position of my personal car for 100% ergonomic accuracy. To ensure a perfect fit, I used calipers to manually measure every electronic component - from the steering wheel and shifter to the seat and pedals - and meticulously remade them in SolidWorks. This allowed me to create an accurate digital twin for precise extrusion sizing and component placement, ensuring seamless hardware integration.',
    technologies: ['SolidWorks', 'FEA Analysis', 'Precision Metrology', 'Manual Machining', 'Ergonomic Modeling', 'Static Load Analysis'],
    keyFeatures: [
      'Initiated during my Emerson co-op as a personal technical investment, applying industrial engineering principles to a high-performance simulation platform',
      'Achieved 1:1 ergonomic replication of my real-world vehicle cockpit by manually measuring all hardware with calipers for absolute precision',
      'Developed a complete digital twin of the simulator assembly in SolidWorks, including custom-modeled electronics for accurate extrusion sizing',
      'Machined custom mounting holes into aluminum plates and performed manual stress calculations for the shifter and pedal assemblies to inform material selection',
      'Integrated modular T-slot aluminum extrusion framing for adjustable seating positions and robust hardware expandability'
    ],
    metrics: [
      { label: 'Ergonomics', value: '1:1 Replica' },
      { label: 'CAD System', value: 'SolidWorks' },
      { label: 'Material', value: '6061 Alum' },
      { label: 'Validation', value: 'Stress Calc' }
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/pw/AP1GczNjHDzOIgcF4we8s8eV2QSaaNxkhyfJHIoSEf6ubjoitF-Q-0THqi1eX37zvZxQHeqxwZa7FXLdXeDO0Q5dNrxWmS1HDouG6XUOfiVpBk6WYvGYhnQ2dYWanHcqZlFzIwTPEP3CdQ7IvBpKjqT6uFoL=w1455-h1158-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPwbB-x8Psib1BrajgIgamMpHs26tY-T4Ldllt2o3SKJzpetMUb203a9Y4m00erPy6InpdCF5onavFSdlJc_TU11w_V473dsnDM8qOoWcQs7fLx9ngx6KQIm9KYugal3RVizWene-Jhjgr7jC3sn_HX=w1395-h1052-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczP5eN4zxBlxzq71JhYH948MIf0AbEcY7ELi03BLiECGqEjXdbOsKDVYjo_zH5BBJ71pXQ0VcBBO9eGac7VzeYeFTMGGdbNNY4UHx2Zs2p7buWPkxYwZNQhcCVfYrdxpohmXpgY0mDQktS-lLMyDDAlI=w951-h507-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczM_0DDnQMSu7oQYvqfTFJLfjLElIqWJv9VsQaKYuncGOrQjAjmsVmSBLeOSlcI85iFneY4as7KucHYDESN1hA6fadnLLAJ24zq2TRsRO_EFdeBNDnGGB6Y4X1ZtLTwF2-p-NXQaivupXJuYP4NnlZO6=w1014-h1352-s-no-gm?authuser=0'
    ],
    objectPosition: 'bottom'
  },
  {
    id: 'strapper-housing',
    title: 'Strapper Reel Housing / Workstation',
    category: 'Industrial Manufacturing (Emerson)',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNi91x5tInKG1r5f9PmzcIRtK3B-4KpzIKS6fhIYk8Qt4HVe0R0tBj1keUPhAkLkocucTnCqqZMBe-IQpsLD_XrFsaOUuBwOzL6bs3eNgcGPZLdq0pnboe9gUtJ55V2ZNPdb13ELfzebb1J9cuwPUMf=w1014-h1352-s-no-gm?authuser=0',
    description: 'Structural redesign of hazardous wooden strapping enclosures into ruggedized aluminum workstations.',
    longDescription: 'During my Co-op at Emerson, I identified a significant safety and operational hazard on the banding line where a new strapper reel was protected only by a temporary, non-permanent wooden enclosure. I led the engineering and fabrication of two permanent aluminum extrusion housings that doubled as ergonomic workstations. By partnering with Angle Lock and utilizing their patented "5th plane" contact geometry, I ensured maximum structural rigidity and a maintenance-free life cycle where fasteners do not loosen over time. These units integrated clear polycarbonate panels for real-time supply monitoring and provided a stable mounting platform for UI equipment and monitors, significantly improving both site safety and workflow organization.',
    technologies: ['SolidWorks', 'Angle Lock Extrusions', 'Structural Design', 'Ergonomic Engineering', 'Project Management', 'DFM'],
    keyFeatures: [
      'Designed and fabricated 2 high-durability workstations utilizing Angle Lock patented aluminum extrusion technology for maintenance-free structural stability',
      'Replaced hazardous wooden enclosures with a clean, industrial solution that integrated workspace and material storage',
      'Implemented clear polycarbonate inspection panels to allow operators to visually verify banding supply levels without opening the enclosure',
      'Integrated heavy-duty monitor mounts and UI equipment platforms on the housing roof to centralize operations and improve organization',
      'Utilized the Angle Lock "5th plane" contact system to eliminate the need for periodic fastener retightening, ensuring a more sturdy and reliable build',
      'Managed the project through all phases: Understand (Stakeholder mapping), Design (BOM & Ergo), Plan (RFQ & Assembly), and Execute (Maintenance install)'
    ],
    metrics: [
      { label: 'Units Built', value: '2 Stations' },
      { label: 'Capital Cost', value: '$2.5K' },
      { label: 'Tech Partner', value: 'Angle Lock' }
    ],
    galleryImages: []
  },
  {
    id: 'roof-rack-desk',
    title: 'Modular Roof Rack / Desk',
    category: 'Product Design',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPVJVvA17ev5RYIIFGlPb5CjxyzOw0ihCVksVshFGj7ZDGdDkusXLBtOrM9efXVQ7C0TV1LBoRYgZeTLU7TonyNMIp40muiDXzVkVN4jgf7xgESA05MSbj_Zk4WtRDkoufgvd6EwrBYe_W9jMSs6vtP=w1718-h1289-s-no-gm?authuser=0',
    description: 'Dual-purpose aluminum extrusion system that functions as a vehicle roof rack and converts into a field desk.',
    longDescription: 'I needed to build this once I built my racing simulator because I simply didn\'t have enough vehicle space to transport it and my belongings. This modular aluminum extrusion system was designed to be a "three-in-one" solution. Primarily, it functions as a high-capacity roof rack that effectively doubled my vehicle\'s storage capacity for long-distance hauls, including a cross-country move from Brownsville, Texas to Durham, New Hampshire. Once at my destination, it serves as a desk; I specifically designed it where you can disassemble the extrusions and then sort of piece it together into a desk that can be placed right next to my racing simulator, and you can just move over the monitor. As a final functional detail, the integrated steel mesh also served as a creative storage rack for my Hot Wheels collection.',
    technologies: ['SolidWorks', 'Aluminum Extrusion', 'FEA Analysis', 'Rapid Prototyping', 'Mechanism Design', 'Structural Assembly'],
    keyFeatures: [
      'Engineered a "three-in-one" modular system that reconfigures from a robust vehicle roof rack to an ergonomic standalone desk designed specifically for sim-racing integration.',
      'Increased vehicle storage capacity by 2x, facilitating a successful cross-country move from Brownsville, TX to Durham, NH.',
      'Successfully traveled over 2300 miles in extreme environmental conditions including rain, mud, and snow with zero structural issues.',
      'Designed for rapid reconfiguration, allowing the disassembled extrusions to be "pieced together" into a desk that holds a racing monitor.',
      'Integrated a dual-purpose custom steel mesh that acts as a secure storage floor and a dedicated display rack for Hot Wheels.',
      'Validated structural integrity through FEA to ensure a reliable 200 lb load capacity under varied travel conditions.'
    ],
    metrics: [
      { label: 'Load Cap', value: '200 lbs' },
      { label: 'Capacity', value: '2x Volume' },
      { label: 'Distance', value: '2300+ mi' },
      { label: 'Config Time', value: '< 10 min' }
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/pw/AP1GczPrkxdA00WrpOfG8hRta9tWe6Lp6qmJ24rTpgwLcEdhnwSEq4BSeUHKuxDqly_-AiBgRl_hflYkZiXoBB9Tc_KZfWHcW1-0NFNePpuCL_BILa4hBbaFnbAmTfYFFsffDVXsDEIa8dOGTHBz2Jm4EVmh=w465-h575-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOl1ArE7JIvwcJz3VGxN7p2e4yMY83thHsslyCNwqEbtyBbGGe8eQPD4GlampkWJ96QIGI7cfWiwE8U51SlJQsYpvA9ULdDufvnzjLRgJCb9bfoEUkB9daSwu8cu9RvHCZDOr4EkVRzWCuqC8yXdIFV=w1014-h1352-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPYaBmbgA6xBN4VBuAAFlGEVKWHXUIFdO7hV9J9FH2oNEyedylwXxffOTD080s5A9EECsg_OPiTGHrAg2Vw3Q2Ux9sCsRW5WbeSfb54XWqaZZ1xdtut_ncuNNl6kejlhN8k7Jey4q_2XCA6Mk81vTuB=w1718-h1289-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczO4sTWncSn1oY2Huat7LpizNc2HCl9Y02ekjs2RavFrbGNDULC1iO0gqotUsKuL6sxBzs5j-75SC-WBRSpIOBds4iyvUB_b9EykOzE7SHOXJayWChKd2HoxjFi3CnVtTH3BJH8pqbur1lzme1dARISc=w1161-h545-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOi8gkmRBREWE9RRjv3p0IUn0PZSsO1gpUMtPtlKtM-f2znqKPmZuTf10UAEQQAV3NztSelBE72BtvLrG3O0amQBXrCmI-D-2pSnbvJoqT-teIfnnsCXnJ9OQwOUEezVpm8EZR1OCK_iYuzKQhc9il_=w1080-h961-s-no-gm?authuser=0'
    ]
  },
  {
    id: 'ecocar-ev',
    title: 'EcoCAR EV Challenge - Cadillac LYRIQ',
    category: 'System Design & Integration',
    imageUrl: 'https://external-preview.redd.it/cadillac-looks-to-be-coming-to-australia-v0-9-HIgRXCMGjw23fEqJGItPQ47QXGuivqC2DAakx_zuk.jpg?auto=webp&s=7cfe99cc793fdbd0d9678eb9349bb4e6e6f8db8f',
    description: 'Authoring high-voltage safety procedures for a 2023 Cadillac LYRIQ re-engineering project.',
    longDescription: 'Served as a System Design and Integration Engineer for the UT Austin EcoCAR team. I was responsible for authoring and validating the "VTI High Voltage Test Procedures" manual, a set of critical safety protocols required for Vehicle Technical Inspections. This technical documentation defines the mandatory checks and balances to ensure all vehicle high-voltage subsystems are grounded and safe for testing. The procedure establishes three distinct validation segments for the HV bus, enabling team-added contactors to be tested without risk of uncontrolled energization.',
    technologies: ['High Voltage Safety', 'VTI Testing Protocols', 'Technical Manual Authoring', 'LOTO Protocols', 'Insulation Testing', 'Bleed-Down Validation'],
    socialLinks: [
      { label: 'Official Website', url: 'https://www.ecocar-at-utaustin.org/' },
      { label: 'Instagram', url: 'https://www.instagram.com/utexasecocar/?hl=en' }
    ],
    keyFeatures: [
      'Authored standardized VTI Test Procedures for High Voltage Insulation (Procedure 1), validating isolation > 1 MOhm at 500V.',
      'Developed Bleed-Down validation protocols (Procedure 2) to ensure HV capacitors discharge below 50V DC in under 60 seconds.',
      'Designed High Voltage Ground Fault Insertion tests (Procedure 3) to verify system response to intentional faults.',
      'Implemented comprehensive Lockout/Tagout (LOTO) safety steps for DMM usage and physical HV disabling.',
      'Standardized experimental equipment requirements including Fluke 17B+ multimeters and Klein ET600 insulation testers.',
      'Integrated test harness and connector specifications to facilitate AWD segment testing without active software controls.'
    ],
    metrics: [
      { label: 'Isolation', value: '> 1 MOhm' },
      { label: 'Discharge', value: '< 60s' },
      { label: 'Safe Volts', value: '< 50V' }
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/pw/AP1GczMNV7k7BR6zI2BbK9N4xkInRNmKHKBMsbDBeVoINeAdOIVJOhzJXad_quhHmbQGL91DnH_teJVj0l66oFjYRjhDXB5Q2p0jT6GqfF59TYLpaD-itrtjBzBN7UDwcaADyDJ3l8wn5EhSvSk4MEWcIbUx=w929-h630-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOdkBxWquujLIYdoW7Jq5i95pLC0LNqiaQ4UQ8SE7KaTre7JYczwKtCpF-JGwj8dHJeAbEi7D50wJETzynRVTsGAHy8bAazOFMACH8xP2rX6RTiMHY9-VqdkzVbeqIkwKLiF0NJZk0l6cPBWJMDVz7D=w1072-h477-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczO6kd0zvffn4pLQwdG767qDeKL6FCQpm5LDPcxkaqKeH0NybpoGzLEOdFyhLmoUI62rAsrLsPIecCN4__15xcVPBvhsNvDIqMweo2ewjRvbWz7ONVwBujzMUh7TXzlDKb3Qdm0EJf0N5mab3Swt95cf=w342-h490-s-no-gm?authuser=0'
    ],
    pdfUrl: '/EcoCAR_VTI_Procedures.pdf'
  },
  {
    id: 'robomaster-robotics',
    title: 'RoboMaster University Series - UT Austin',
    category: 'Mechanical Design & Logistics',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczN6saOR_KMELRVPF7aMh6lwTi2iJWZlq4f27i8wfz1jIsQIoJxZG-xJKmT8smv9ETvADCjHCblzF2J2WuAwi5KsnzA6ZoR6p42V6KCLgZRj1X7o5drSMxBQnTpulTyELNlWmKOOnu0Fgxf9lfQ2XmzA=w1014-h1352-no-gm?authuser=0',
    description: 'Competitive robotics platform focusing on precision chassis design, high-speed shooters, and custom logistics solutions.',
    longDescription: 'The RoboMaster University Series (RMU) is a premier global robotics platform where students go beyond textbooks to build advanced fleets for tactical battles. As a Mechanical Design Member of the UT Austin team, I contributed to the construction of 2 out of our 3 competition robots (two autonomous and one manual). My primary focus was the engineering of structural chassis components and precision shooter mechanisms, where I leveraged GD&T for complex assemblies. Each year, we navigate rigorous design rubrics and evolving competition constraints. Beyond the robots themselves, I identified and solved a critical logistical challenge by designing and fabricating a fleet of heavy-duty, modular wooden transport crates with removable casters, ensuring our robots could be shipped securely to cross-country competitions.',
    technologies: ['SolidWorks', 'GD&T', 'CNC Milling', 'Woodworking', 'Embedded Systems Integration', 'FEA Analysis'],
    keyFeatures: [
      'Engineered structural chassis parts and high-precision shooter mechanisms for 2 out of 3 competition robots.',
      'Collaborated cross-functionally with the electronics subsystem to ensure seamless hardware integration and component clearance.',
      'Applied GD&T (Geometric Dimensioning and Tolerancing) to structural chassis and shooter drawings to ensure precise fitment and streamlined assembly.',
      'Designed and fabricated high-duty wooden transport crates with removable wheels to provide a permanent, secure solution for national shipping.',
      'Iterated mechanical designs based on annual design rubrics and complex tactical constraints set by the RMU series.',
      'Integrated real-time feedback loops from the manual robot pilot into the mechanical design for improved operator control.'
    ],
    metrics: [
      { label: 'Robots Contrib.', value: '2 / 3' },
      { label: 'Crate Load', value: 'High-Duty' },
      { label: 'Assembly Spec', value: 'GD&T' }
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/pw/AP1GczM8n3b2fbCqjinffCQjAl9eCwQMugtpjBTvn_kQDYSYeTGT4w50Fq8d7JxYj1oNq03_ypSs1JCBYtiVFh-eBtHUs1wr05b736sVsyeO6PyDsJWU-Yitf_e9Iy2fq_W3z3TAPkR8W7asLU2lOzN6J1lz=w762-h572-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNFzEyANLHS3Prv19oa6uc4D0BbfcplJTv93RGsAbmmgxhYnkxXkRb8TIcvXZ8rTIsmLQ_3yRY8e5b2Orn4DSJuySfTp50AmizVl3TMcYomPx_c7rQsH4T5Q20PzqJepeoEWjILNGWb5wW1lzd6chBX=w684-h733-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczN6saOR_KMELRVPF7aMh6lwTi2iJWZlq4f27i8wfz1jIsQIoJxZG-xJKmT8smv9ETvADCjHCblzF2J2WuAwi5KsnzA6ZoR6p42V6KCLgZRj1X7o5drSMxBQnTpulTyELNlWmKOOnu0Fgxf9lfQ2XmzA=w550-h733-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMHI-LEgZe8c1vLxwMUSAT2BOmzN3ksp85eAS2oXBVcaKUqlmoA5jZEz2ys_77aWI988eqzzQS2KlukdaxTR7Bmyd9_NTVMuf7fm6-HoEiBIj8uR6usoGVE8p19oroSgRyNX3PCZdpZg6LyR4VmsKCg=w364-h291-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMxzkCVg9ddnXSlqB3rypb3ot4polDDj45lUKs74_CYslzJ_xiw521-mTqhRS41uQ5rw4OeuEZA8ktrRtfrIuiPX8_G0ZaS7wskntmiuzp8aeIFsUvSITT-GG3cpeEfh-vlV27oIkRR2Hnftbgc9MgK=w613-h545-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMxmavcSjdxCVM5_B1kQ-Dhzd-3hTy1N7P5xRRifOEU44ajpFhJcw6hM_UYq90jt9DI_x96sblAnqXX9q2uOj0CNYjYm40P5ZDyqc4YjZ-orpdn4Amyzavbp8jhDg4WTyTzHWFRkCpMlbvyLCkVTTt8=w577-h266-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczM7jErJ2ghKqIkeUT0Dw20TavSEo2ddMGo-nR00XEJQuA94kfECUsmAHFtG7er5HNJjASeSZUEYvaMOK3T8SDEzeIVqmOXl3qq6jO3JfKmt0JKmTbsk2_xKqLJLlYXajJgHp29U8YgkzeIDrvTraNF_=w550-h733-s-no-gm?authuser=0'
    ]
  },
  {
    id: 'pc-builds',
    title: 'Custom Computer Builds',
    category: 'System Integration',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPu_PEAEjPOnbNe_lhu9ksh16vxMF5pyTKk4uEKqd5cB-7UFkA4LOMrKQMYQHUxM7Ando29NVgHGV5MrAmwZgQUYuilyVAp0_KCAr4uoMDEhuef9o-kO4Q2SnjTjsNwt01GZL3Bqida-w8pgSgsjBy2=w550-h733-s-no-gm?authuser=0',
    description: 'A personal technical passion turned profitable hobby, focusing on component optimization and aesthetic cable management.',
    longDescription: "I built my first ever computer during my freshman year of high school. To afford the parts, I had to sell candy at school for a couple of months until I could finally afford it. Ever since then, I've been in love with building computers. As a hobby for the past couple of years, I scout Facebook Marketplace for used components, find a mixture of new components, put everything together, and sell them for a profit. This cool side hobby project has allowed me to learn more about technical components within a computer while also learning about the business and flipping side of it. Above all, I am really proud of the cable management skills I've developed throughout the years.",
    technologies: ['Thermal Management', 'System Integration', 'Sales & Logistics', 'Cable Management', 'Market Analysis'],
    keyFeatures: [
      'Refined proprietary cable management techniques over a decade of personal and commercial builds',
      'Strategic sourcing of used and new components to maximize performance-to-cost ratios',
      'Managed end-to-end logistics including technical benchmarking, market pricing, and customer sales',
      'Deep technical knowledge of component interoperability and thermal optimization'
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/pw/AP1GczN-9FQgYtoT_4yoKciNDTjnqSAntySKtuf8pNjrjGdDRGOHS9p33ldsjNqthXQX-Wv9DwEbJ_jAh7adtkF9jTiE46nwy1uHeBMH_dJtZFA3pbArKp3Dq1oeBRvnigezAziZX43ZfqCuSyJiVSnZ7wO_=w550-h733-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMmUGuQ9AWoUk7QKxmZ2pRLTf4B6NQgZyBpXP5mRNJgvRu-nEneBPEy4SmREn3HkIbEI_n5Il82vnj8YsUrx2odgbp4oakTu1usZhKWfIZ6MYbSywdGEJDIcpYDHvSQb9nIA_oUUWNZF2oPdrcJvOzo=w550-h733-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNWg-ZEHlI4nZIKDnwkGiBI5bEL6AaXYcMqWrmTTCUv4NsbttBseM6SwLz4wg-6IT6992DOJEUotE25hLlkJZEjRD2idkwkHi9eKtN1x_ZeKfZydHp9q1au4RkHrsaSShCV4u1IAP7I-Eygf_sNLMwn=w550-h733-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMR4k3IIfnC1wsWbdmaGzIhuAJrcODY2ZVKgl9aBHdZtSNsjphe2Ey7WgjqL09z0SBhp8SRI65n9QF4-UE5Mo8MxhXxbvGldhAf3bhnGdIH-18TF2JT536rh6q9PAI2poBnhe8Sc4hEYUQSfkcHmTnY=w550-h733-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOs4Vj0YHcfyPjv4q0O2zhJXIBpCPRjoXfwsCEw7L1FCciW8CQEdhPHYOvECXjgdxobbJN684vuPIreCKoCW0lTxfaY248xeVMWqnTUgCsm0UvOBHG0JUuLyp3yyAKxPPaX1U4Rvo8qShpkIZp7fPIP=w550-h733-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOVfxR-cqfW74SwPdd2qmkuvRl6C6oYYkG7HWkhuqpUiuGgBe-0OMVDnBUsHRQSwA_iIGo8J9tVdEuprt1MfHa6vr3xtQwZpd6eFr7tl26NsIv1dTJVobEhrNDCk3jUb9SsS00rIQWVcpSLCm96mjny=w550-h733-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPfcpu-Tf5DGY0dXWk2vHxOb8zC-ppC3Jhhb__GEqtVRx-MQuox3g6CsEzSaViWYORhRvLw20YRSR2ft3lK_b8_z0zk_8cKSOFS0PAEN-_hVLl8paXWjwmbFnvAuaGkonECurkyQJnBORTsiHGlVBSU=w550-h733-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczOc4Br4ieryGRoiZZ60UGkXat9F8xckS1iPFCBIWt6Hk_lixWunqh0jlmgyT1PlLcgaqnasvDbeYWgqVUkVgUdLu6ub-hgivV5iueM71DJSVypfL2ZhMOPonI86oLpcaYHcfqzu-wJoMi2ZePukP_v=w550-h733-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMxgr_VBrUwMG5n94QMY736F7A62-B3EdBdi7D4G28JK7egCDlL29kkRJHLXTXtrRmVLOSp14zGI0loO2UsFMcn_3WUpgj2a9ynPcelreqFUMUAJwyPIc1ZPcnYSIwYrnTcJTqyGv1s2OVsjsObi0P=w977-h733-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPNXmX4UXbdzelIVcc2QUxJRGK1vxBMVjHzCY6YpoTy1dpkkxAhhx66slvmTLei8GtXLXqq75sMURnomFv1VMGpbtKE9TVgQ8e9T0xrVgfEevqts9T6881tHJmTsWIdNj4raQHv5QmFV9oU5j-ISm1k=w977-h733-s-no-gm?authuser=0'
    ]
  },
  {
    id: 'cockrell-research',
    title: 'Additively Manufactured Cable Management Concepts',
    category: 'Research & Product Development',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczP6TtQmzcvLKHXmqCDATesU5Azj5rX-at9X8PHkeA2z2fbvwghxX-jGAY-DDGbeCGNoEFlnDPO7iyPdKgRZ7DzEoi2vLcEOXSnd3rW4DQF_PmnyBRTT4xJ1Bvj0LH4KpNHla2xkfIb_jVs5VdrVgnV5=w510-h470-s-no-gm?authuser=0',
    description: 'Freshman research project developing novel cable management solutions for aerospace and commercial office applications.',
    longDescription: 'Collaborated with a cohort of engineers under the guidance of Michelle Pang (Senior Member of Technical Staff, Sandia National Lab) to develop novel cable management solutions capable of being additively manufactured for the aerospace industry. The project followed a comprehensive engineering design process: from analyzing contextual needs and generating a weighted customer needs list (House of Quality) to concept generation using mind maps, function trees, and 6-3-5 brainstorming. I designed the final prototype, "Design D" - a rigid U-shaped channel with a Velcro strap and adhesive bottom - which was selected through a Pugh chart analysis for its superior structural rigidity and intuitive functionality. The component was modeled in SolidWorks and manufactured via FDM on a Raise3D Pro 3.',
    technologies: ['SolidWorks', 'FDM (Raise3D Pro 3)', 'Pugh Chart Analysis', 'House of Quality', 'Function Trees', '6-3-5 Brainstorming'],
    keyFeatures: [
      'Developed a weighted customer needs list through user interviews across aerospace and corporate sectors to identify key drawbacks in existing solutions',
      'Synthesized engineering specifications into a House of Quality to map technical requirements like cable retention tension and operable temperature range',
      'Engineered "Design D" (Rigid U-channel with velcro) specifically for the middle-percentile of office and corporate users',
      'Validated design functionality through real-world testing, including a 6-foot drop test and simulated foot-traffic loading',
      'Identified and addressed failure modes in adhesive-to-plastic bonding for future product iterations',
      'Explored future aspirations in topology optimization and lattice structures to reduce material volume while maintaining structural integrity for aerospace use'
    ],
    metrics: [
      { label: 'Drop Test', value: '6 Feet' },
      { label: 'Material', value: 'PLA Plastic' },
      { label: 'Print Accuracy', value: '0.12mm' }
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/pw/AP1GczMGBjPgi_lWaGJpSsrOhjcsOjKYyB2OjWXaMk1g8V_Jy4I1AqPn_8v_B4_oLsQlzBzwIcr0zkGQXKn5l8IelrYnGlzLgflAR2rs0jNPdKLeQGiVqz84m79jY6Gkys7bCoHhF2c9nDAfJVh-WUIVtIno=w314-h301-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczO_gW2wV4vvPhpSAlcpUDNiKYHQqhQn1Ph1Nv1Li6SDFu9FfAa4WNIlGD-NORBLc9sNX0zM7TbXgud7tly_PIyZJRd-zNzhC7-KvoMtCt6r-Nd-ScRwaPJ3al8r3gzwI-BijACstghHXK547XUeLe8o=w359-h290-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMYMRy2dsU6Vi6IJjntKVeNvBnTqEMY_y4K3iBQOZkxC52Pjqcc4kWiE3BnS8JGP-DX-SQb6TTkldrC6sFqOmjNTVF1YNzuylnTsy9LkqNpBqqvrtFVk83paOyus-AvD3Yr9RcryyT51F_4Jqic1w6E=w402-h350-s-no-gm?authuser=0'
    ],
    pdfUrl: '/Cable_Management_Publication.pdf'
  },
  {
    id: 'nfc-stand',
    title: 'Ramshorn Scholars Program - NFC Integrated Stand',
    category: 'Product Design & Prototyping',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNoBODdXoB48Kpevspxg4hDtPO0jScy3A5FV-zl2aCnE5cQYrLIk1b_hakQ9oUGcfg7OM2HFvSrIxk1PSg0WEVcroYvDZYvkbRMYz4GF739JlgJQlXJQVS8Aq2KA4cmI0n7jmfmq57wE9LajsuG3xVL=w1014-h1352-s-no-gm?authuser=0',
    description: '1st Place award-winning project solving campus identification friction through laser-cut NFC integration.',
    longDescription: 'During my freshman year in the Ramshorn Scholars Program, our team participated in an annual competition to solve a relevant campus-wide challenge. We identified the constant friction students face when pulling out physical IDs or navigating apps for gym entry, shuttle bus boarding, and dining hall access. Our solution was an ergonomic desktop and wall-mountable stand with integrated NFC tags, allowing students to "tap-to-trigger" their digital identification instantly. I was responsible for the mechanical fabrication, utilizing laser cutting and manual assembly to produce the final competition prototype. Our design was awarded 1st Place overall out of the entire cohort, including a $2,000 group prize.',
    technologies: ['Laser Cutting', 'NFC Technology', 'Rapid Prototyping', 'Mechanical Assembly', 'User Experience (UX)'],
    keyFeatures: [
      'Won 1st Place out of the entire Ramshorn Scholars Program cohort in the annual engineering design competition',
      'Engineered a modular stand capable of housing programmable high-frequency NFC tags',
      'Laser cut and hand-assembled the structural components to ensure precise fitment and professional presentation',
      'Identified and solved student pain points by streamlining the authentication process for high-traffic campus facilities',
      'Secured a $2,000 group scholarship prize for technical excellence and innovative problem-solving'
    ],
    metrics: [
      { label: 'Award', value: '1st Place' },
      { label: 'Scholarship', value: '$2,000' },
      { label: 'Method', value: 'Laser Cut' },
      { label: 'Cohort', value: 'Ramshorn' }
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/pw/AP1GczNdnBsk3Up7cpk7h6Id4IPdjjEZp6VZXDNXx2UncvEet4RHeZZmzvO7RHV11aJCJ9IV_VX6mdIilrd8sYG2IjppjdJlxvtf9XI-W44FBGB6upeb69KROTfRx5bsfjRxkmv7P1rqxdVeNyxpPAYtiP8R=w1014-h1352-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczO0xk6pturb8AuOveMyxGGEySrLpXUT5iH4I9Kdg6kus8FxJcP3y8ymdi6slI2VBymMnfs7rrj_1cf_6ZgGzbZ3K0Cc_op1l3WuOzM6E9WUIHbwEvEQTmAFg-E5KK2kHUO5hQXj085eT4kVF0H5CKKH=w1014-h1352-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPA__i3Lhy6d3V6TItWgmyqeHb5m1QMt9gZsA8eoQCbs9mfG8dVsICGHCck-ARg1knaHeyLmN-0_ciHd4w9Q_7jxa3ftfbbxyJow6OSL5eFxzPcmV7tCnCqU2pLv2aAa0Ryj0WMSwF_XYXp93TtViAW=w1014-h1352-s-no-gm?authuser=0'
    ]
  },
  {
    id: 'fidget-spinner-cnc',
    title: 'Fidget Spinner',
    category: 'Product Design & Manufacturing',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNo1XMyv20NV7rbiKNuPR06mbRpqee97KNAMRKeBVEGvgVkw7nuaDETm-sXyYKzdregyEwBlUaZ4JBF6F1MbuWVX8s4V2n0wd3YZLvyovUyx_ZTbZVpC5RQJCeeL_j-dJ0MfHmBv-xbu0nVOFI2yy-9=w680-h755-s-no-gm?authuser=0',
    description: 'The project that served as my foundational introduction to SolidWorks and a variety of manufacturing methods.',
    longDescription: 'The fidget spinner project served as my foundational introduction to SolidWorks and the broader engineering design process. This project was instrumental in exposing me to a variety of manufacturing methods, including additive manufacturing for rapid prototyping, laser cutting for structural templates, and injection molding for high-volume component production. I gained a deep understanding of engineering tolerances (H7/p6 fits) and an initial exposure to mold design and Finite Element Analysis (FEA) to ensure structural reliability. It was the bridge between my first CAD models and physical metrology, verifying design tolerances and GD&T compliance using precision metrology tools.',
    technologies: ['SolidWorks', 'Additive Manufacturing', 'Laser Cutting', 'Injection Molding', 'Mold Design', 'FEA Simulations', 'Precision Metrology', 'Rotational Dynamics'],
    keyFeatures: [
      'Served as my primary introduction to SolidWorks, mastering core modeling and assembly techniques.',
      'Explored multi-disciplinary manufacturing pathways including Additive Manufacturing, Laser Cutting, and Injection Molding.',
      'Designed and evaluated custom molds for component production, focusing on draft angles and parting lines.',
      'Implemented precise engineering tolerances to achieve a perfect transition fit for ceramic bearings.',
      'Performed introductory FEA simulations to validate structural integrity under high rotational velocities.',
      'Utilized digital micrometers and calipers to verify that physical dimensions aligned with theoretical CAD models.'
    ],
    metrics: [
      { label: 'CAD System', value: 'SolidWorks' },
      { label: 'Tolerance', value: '+/- 0.001"' },
      { label: 'Fitment', value: 'Transition' }
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/pw/AP1GczMLpniAHlrkde-27R-Pp9NO6l18ULiNAnuhusGDsgwe97OTc1QzzKR1KXPeyrRYELs7hKw3v-57f7KmHUEbRFZw2sF9XC_hehboG40F-xVbPIV22yriYgNGH_HS7v7LullRaINr5afqQQ-ddhWUBjfr=w589-h455-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPXj2GFzDsgx1KSBCI694tdtrXnORHsLbhKdjaiCKAtxZAM-vc3gihCDBnyeLARmpS35wrMWGi3kUl6Zx0WV6hpgb1DztqGM_0LvWkzO0YFH_FBbxFpSCaPaLIs00s7MglyrwUwsJ8phFjMNzviV9tN=w360-h396-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMvDpGe2QlFVIGL5wxC05z1bzJrETLofKfeoymELdPFM8Kt_LOR0KvJ396KSpXIFn1rCObnrBfSSHScs8kWaSAOigTfkkHd-CRB_RQFXFWaHsDh1KLAtC5AxvJro-uWPWe9c6ylf8ggqOvPFIe8raSL=w528-h482-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczNeRxrjLvZtpfNbKuhDYFPi71aMD5McFpzcgHq6GQzNdnp8Lv2uvmo3_hTcmGz6u0l-KiJIpvJW47H0ZNPfnlMuTcmHkkck47pa2xo8Rv4x7_iZNH4NtGG-HeAyS53zVLOJD62tv_DXfkpUZTNqOCAU=w587-h768-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMR4k3IIfnC1wsWbdmaGzIhuAJrcODY2ZVKgl9aBHdZtSNsjphe2Ey7WgjqL09z0SBhp8SRI65n9QF4-UE5Mo8MxhXxbvGldhAf3bhnGdIH-18TF2JT536rh6q9PAI2poBnhe8Sc4hEYUQSfkcHmTnY=w579-h515-s-no-gm?authuser=0'
    ]
  },
  {
    id: 'vex-robotics',
    title: 'VEX Robotics Competition',
    category: 'Hands-on Engineering & Prototyping',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOs4EbUDFXXbrVE9n9s-7C2eNMM9wKdimT8DtHnW8vvpMPVIDFxVcCr69XS7VqeFY8nBn9EuD9LBxmcg0usfe1ir0dLF0XGB3toCAopD6MfyZ4fdSOr1Q4PfDIVEX4xr4NEK6SbE4rCYzgnoDmG1HD0=w1014-h1352-s-no-gm?authuser=0',
    description: 'A foundational high school passion project where I dedicated every spare moment to robot design, assembly, and CAD.',
    longDescription: 'Throughout high school, VEX Robotics was more than just a club - it was a passion that consumed all my time. I spent countless hours after school and every single lunch period in the lab working on the robot. My dedication was such that I would often rush through my classwork just to finish early and get a few extra minutes of design, assembly, or CAD time. This experience was my true introduction to the engineering cycle, teaching me the value of hard work and persistence in bringing a mechanical vision to life.',
    technologies: ['CAD (SolidWorks/VEX)', 'Mechanical Assembly', 'Robot Design', 'Iterative Prototyping'],
    keyFeatures: [
      'Dedicated every after-school and lunch hour to hands-on robot construction and maintenance.',
      'Optimized academic workload to maximize availability for laboratory work and CAD drafting.',
      'Managed the full lifecycle of robot development from conceptual sketches to functional assembly.',
      'Gained deep experience in mechanical troubleshooting and structural iteration through intense competition.'
    ],
    metrics: [
      { label: 'Commitment', value: 'Daily' },
      { label: 'Focus', value: 'Design/Build' },
      { label: 'Era', value: 'High School' }
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/pw/AP1GczOs4EbUDFXXbrVE9n9s-7C2eNMM9wKdimT8DtHnW8vvpMPVIDFxVcCr69XS7VqeFY8nBn9EuD9LBxmcg0usfe1ir0dLF0XGB3toCAopD6MfyZ4fdSOr1Q4PfDIVEX4xr4NEK6SbE4rCYzgnoDmG1HD0=w1014-h1352-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMEs0mSZNmTXByygeMxCspcx1jR_tLNvMwm9gER8RiVYWR-SgZp0nXkGhO0JMbxkrrzSPPe9ulI3yHrFOzHtr0vGbbP6BprwoJ37sLySLsY0IbCsVUU0xgTBsVdRF8aOS5qfEuvRaXX0F_9maK25Z3L=w667-h836-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMwWSoxEFu49aqxPVShyL4xF2vqPd_3NJIJHeRNatu77fPVJhPzVx-KBtZLOaoGHFpgUKA5cFFAcovzwNaI7rY2pwQL5hyNKZACkoVqr0Z1Wvn7KT26Mi1-YH66rYF3MCpv12gLb9xckQF_KvxaR_Rh=w620-h792-s-no-gm?authuser=0'
    ]
  },
  {
    id: 'tsa-engineering',
    title: 'Technology Student Association (TSA)',
    category: 'Structural Engineering & Leadership',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPI3fGMno8KFTKnxTyWqG9wzJJorhm-uVVhR0jA4Irc5IfjGNZbzss7n8HMS4P1WkYF39m7N1eTgCVSQLqG-T5vJDUd7I5KdkrkGRViKjf58b1pOVgEas5xcD9u0jEYOHEHu7PcyaODiUE8BTTZ7j1c=w733-h389-s-no-gm?authuser=0',
    description: 'Chapter officer and state finalist in multiple engineering design competitions including VEX Robotics and Structural Design.',
    longDescription: 'During my four years with the Technology Student Association (TSA), I honed leadership skills as a chapter officer and gained foundational engineering experience through hands-on projects and competitions. I actively participated in a variety of challenges that allowed me to apply problem-solving, design, and technical skills while competing against top students across Texas. These experiences solidified my passion for engineering, teamwork, and innovation, laying the groundwork for my academic and professional pursuits in mechanical engineering.',
    technologies: ['Structural Analysis', 'Balsa Fabrication', 'Technical Sketching', 'AutoCAD', 'Leadership', 'Project Management'],
    keyFeatures: [
      'VEX Robotics: State Finalist',
      'Dragster Design: State Finalist',
      'Trebuchet Design: State Finalist',
      'Drone Challenge: 1st Place at Regionals',
      'Webmaster: Regional Finalist',
      'Digital Video Production: Regional Finalist',
      'Led the chapter as a technical officer, coordinating competition logistics for over 20 students.'
    ],
    metrics: [
      { label: 'Role', value: 'Vice Pres.' },
      { label: 'Duration', value: '4 Years' }
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/pw/AP1GczOUlt_CHtlu2Acovok9DTbPFX1to0Zkb9H4MtPMM5S-cIHn28pkqlrWSV5PDWhIw6e-ta2JPn4HaaW1FdBi-ZfczWgisvQ7bAkCv-q7zir0MJiLE_O39KzGH8NZVyT6J-e-fH6ijZyfkLpwDm-UEYYc=w634-h473-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczONAYIZNQCQDdwQiqv84Z6bR9QxVPu5osfaDvQI_ZWgod9mJmSQb0B_7fOoq3aUPNge657hV56xILhJHBO93c9eePHhF-Qoum7pLzbAt2UVahEZEVTqr0u81oETQ1axhpFOLllFHy0snFNbjCUdV1g7=w960-h720-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMjUBC3m1FDnI7PshMJ3qxmyZJIhLS8farLxbU9fwghUuvIHtbxzPiifAoq8Ye_z2_1T0s6yaOaQVg8Lc7RcdReHvgsPZZumqchjDmWyYyaDQ2b-8qw9S3SqT92KZrF4VmAwI2ReagJ1gz2s89Bq7qg=w564-h649-s-no-gm?authuser=0'
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'FSAE Longhorn Racing (Internal Combustion)',
    role: 'Composites Engineer',
    duration: 'Jan 2023 - Jan 2025',
    description: [
      'Founded the composite subsystem team and standardized layup/testing methods, enabling repeatable fabrication cycles.',
      'Reduced production time by 1.5x and cut component weight by up to 70% through optimized material selection.',
      'Manufactured and validated carbon fiber aerodynamic and structural parts including airfoils, nose cones, and undertrays.',
      'Contributed to the design and validation of a full carbon fiber monocoque chassis using FEA and failure analysis.'
    ],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Texas_Longhorns_logo.svg'
  },
  {
    company: 'University of Texas at Austin',
    role: 'System Design & Integration Engineer',
    duration: '2022 - Present',
    description: [
      'Authored the High Voltage Test Procedures (VTI) for the EcoCAR EV Challenge, ensuring competition-ready safety compliance.',
      'Documented rigorous grounding checks and lockout/tagout procedures for a 2023 Cadillac LYRIQ.',
      'Research lead for Undergraduate Research (Cockrell Research Program) focusing on additive manufacturing.'
    ],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Texas_Longhorns_logo.svg'
  },
  {
    company: 'VASQUEZ PC BUILDS',
    role: 'Founder & Lead Technician',
    duration: '2020 - Present',
    description: [
      'Managed a small business assembling custom high-performance workstations.',
      'Specialized in advanced cable management and aesthetics.',
      'Handled all logistics from component sourcing to final sale.'
    ],
    logo: 'https://picsum.photos/id/10/200/200'
  },
  {
    company: 'Technology Student Association (TSA)',
    role: 'Vice President',
    duration: 'Sep 2018 - Jun 2022',
    description: [
      'Honed leadership skills as a chapter officer and gained foundational engineering experience through hands-on projects.',
      'State Finalist in VEX Robotics, Dragster Design, and Trebuchet Design.',
      '1st Place at Regionals for Drone Challenge.',
      'Regional Finalist as Webmaster and for Digital Video Production.'
    ],
    logo: 'https://lh3.googleusercontent.com/pw/AP1GczPI3fGMno8KFTKnxTyWqG9wzJJorhm-uVVhR0jA4Irc5IfjGNZbzss7n8HMS4P1WkYF39m7N1eTgCVSQLqG-T5vJDUd7I5KdkrkGRViKjf58b1pOVgEas5xcD9u0jEYOHEHu7PcyaODiUE8BTTZ7j1c=w733-h389-s-no-gm?authuser=0'
  }
];