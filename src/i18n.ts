export type Language = 'en' | 'de';

export interface Translations {
  lang: string;
  toc: {
    title: string;
    executiveSummary: string;
    rfExposure: string;
    sarFramework: string;
    appleWatchSar: string;
    iphoneSar: string;
    sarComparison: string;
    biomechanics: string;
    anatomicalParams: string;
    torqueCalculations: string;
    c1Considerations: string;
    postureImplications: string;
    pfasExposure: string;
    materialComposition: string;
    transferMechanisms: string;
    exposureContext: string;
    riskMitigation: string;
    synthesis: string;
  };
  hero: {
    badge: string;
    titleItalic: string;
    titleMain: string;
    subtitle: string;
    imageCaption: string;
    summaryTitle: string;
    rfTitle: string;
    rfDesc: string;
    rfLimit: string;
    bioTitle: string;
    bioDesc: string;
    bioUnit: string;
    chemTitle: string;
    chemDesc: string;
    chemUnit: string;
  };
  rf: {
    sectionTitle: string;
    sectionDesc: string;
    frameworkTitle: string;
    sarLimitsTitle: string;
    torsoHead: string;
    extremities: string;
    limitsNote: string;
    testConfigTitle: string;
    testStandard: string;
    testStandardDesc: string;
    testSimultaneous: string;
    testSimultaneousDesc: string;
    testBodyWorn: string;
    testBodyWornDesc: string;
    watchTitle: string;
    limbSar: string;
    ofExtremityLimit: string;
    safetyMargin: string;
    headSar: string;
    ofHeadLimit: string;
    exemplary: string;
    safetyMarginLabel: string;
    exceptionalConservatism: string;
    engineeringExcellence: string;
    transmissionTitle: string;
    ble: string;
    bleNote: string;
    wifi: string;
    wifiNote: string;
    cellular: string;
    cellularNote: string;
    iphoneTitle: string;
    iphone16Standard: string;
    bodyWornAt5mm: string;
    ofTorsoLimit: string;
    iphone16Simultaneous: string;
    cellularWifi: string;
    marginCompression: string;
    iphone17Title: string;
    cellularSar: string;
    simultaneousSar: string;
    iphone17Note: string;
    comparisonTitle: string;
    magnitudeDiffTitle: string;
    absoluteDiff: string;
    normalizedMargin: string;
    watchMargin: string;
    timeAveraged: string;
    riskHierarchyTitle: string;
    deviceRiskAssessment: string;
    rfExposureRisk: string;
    biomechanicalRisk: string;
    chemicalTransferRisk: string;
    margin: string;
    noTorque: string;
    load: string;
    highRisk: string;
    moderateRisk: string;
    lowRisk: string;
    variable: string;
    fluorine: string;
    regulatoryMarginTitle: string;
    exceptionalMarginDesc: string;
    prudentCompliance: string;
    marginCompressionDesc: string;
    neutralFlexion: string;
    mildFlexion: string;
    moderateFlexion: string;
    severeFlexion: string;
    premiumBands: string;
    midRangeBands: string;
    siliconeBands: string;
  };
  bio: {
    sectionTitle: string;
    sectionDesc: string;
    paramsTitle: string;
    headMassTitle: string;
    adultMale: string;
    adultFemale: string;
    standardModel: string;
    gravitationalForce: string;
    leverageTitle: string;
    pivotLocation: string;
    pivotValue: string;
    leverArm: string;
    comPosition: string;
    comValue: string;
    spineCaption: string;
    torqueTitle: string;
    methodologyTitle: string;
    headWeight: string;
    leverArmLabel: string;
    flexionAngle: string;
    methodNote: string;
    neutral: string;
    neutralDesc: string;
    mild: string;
    mildDesc: string;
    moderate: string;
    moderateDesc: string;
    severe: string;
    severeDesc: string;
    progressiveTitle: string;
    progressiveNote: string;
    c1Title: string;
    normalCapacityTitle: string;
    feaValidation: string;
    feaValue: string;
    cadavericTesting: string;
    cadavericValue: string;
    ligamentousInjury: string;
    ligamentousValue: string;
    safetyErosionTitle: string;
    flexion15: string;
    exceedsFea: string;
    flexion30: string;
    belowCadaveric: string;
    flexion60: string;
    exceedsCapacity: string;
    criticalThreshold: string;
    pathologicalTitle: string;
    romIncrease: string;
    segmentalInstability: string;
    c1RingFracture: string;
    fatigueMicrodamage: string;
    discDegeneration: string;
    acceleratedAging: string;
    postureTitle: string;
    acuteChronicTitle: string;
    acuteLabel: string;
    acuteDesc: string;
    subacuteLabel: string;
    subacuteDesc: string;
    chronicLabel: string;
    chronicDesc: string;
    c0c1Title: string;
    totalFlexion: string;
    concentrated: string;
    c2c7: string;
    reducedLoad: string;
    compensatoryKyphosis: string;
    transmittedLoad: string;
    kinematicTitle: string;
    kinematicDesc: string;
    kinematicNote: string;
    c0c1Motion: string;
    thoracicCompensation: string;
    c2c7Contribution: string;
  };
  pfas: {
    sectionTitle: string;
    sectionDesc: string;
    materialTitle: string;
    fluoroelastomerTitle: string;
    chemicalStability: string;
    chemicalStabilityValue: string;
    lowSurfaceEnergy: string;
    lowSurfaceEnergyValue: string;
    mechanicalDurability: string;
    mechanicalDurabilityValue: string;
    pfhxaTitle: string;
    medianConcentration: string;
    medianValue: string;
    maximumDetected: string;
    maximumValue: string;
    detectionRate: string;
    detectionValue: string;
    priceParadoxTitle: string;
    premium: string;
    premiumFluorine: string;
    premiumDetection: string;
    highestRisk: string;
    midRange: string;
    midRangeFluorine: string;
    partialDetection: string;
    moderateRiskLabel: string;
    budget: string;
    budgetFluorine: string;
    zeroDetection: string;
    lowestRisk: string;
    paradoxNote: string;
    transferTitle: string;
    sweatTitle: string;
    elevatedTemp: string;
    elevatedTempValue: string;
    poreDilation: string;
    poreDilationValue: string;
    hydration: string;
    hydrationValue: string;
    mechanicalFriction: string;
    mechanicalFrictionValue: string;
    absorptionTitle: string;
    inVitroTitle: string;
    inVitroDesc: string;
    skinModelTitle: string;
    skinModelValue: string;
    skinModelDesc: string;
    biomonitoringTitle: string;
    biomonitoringValue: string;
    biomonitoringDesc: string;
    transdermalTitle: string;
    physiologicalTitle: string;
    tempElevation: string;
    vasodilation: string;
    bloodFlow: string;
    poreDilationLabel: string;
    surfaceArea: string;
    mechanicalTitle: string;
    friction: string;
    surfaceDisruption: string;
    occlusion: string;
    hydrationMaintenance: string;
    pressure: string;
    contactIntimacy: string;
    transdermalNote: string;
    exposureTitle: string;
    usagePatternsTitle: string;
    wearDuration: string;
    wearDurationValue: string;
    activityFrequency: string;
    activityFrequencyValue: string;
    sessionLength: string;
    sessionLengthValue: string;
    annualExposure: string;
    annualExposureValue: string;
    regulatoryStatusTitle: string;
    euTitle: string;
    euStatus: string;
    euNote: string;
    usTitle: string;
    usStatus: string;
    usNote: string;
    epaTitle: string;
    epaStatus: string;
    epaNote: string;
    exerciseCaption: string;
    behavioralTitle: string;
    sportPositioning: string;
    sportPositioningDesc: string;
    sweatEnhancement: string;
    sweatEnhancementDesc: string;
    sustainedWear: string;
    sustainedWearDesc: string;
    mitigationTitle: string;
    consumerGuidanceTitle: string;
    materialSubstitution: string;
    materialSubstitutionDesc: string;
    materialSubstitutionEffect: string;
    productScreening: string;
    productScreeningDesc: string;
    productScreeningEffect: string;
    durationLimitation: string;
    durationLimitationDesc: string;
    durationLimitationEffect: string;
    manufacturerTitle: string;
    pfasFreeTitle: string;
    pfasFreeDesc: string;
    pfasFreeNote: string;
    explicitDisclosure: string;
    explicitDisclosureDesc: string;
    explicitDisclosureNote: string;
    standardizedTesting: string;
    standardizedTestingDesc: string;
    standardizedTestingNote: string;
    legalTitle: string;
    californiaTitle: string;
    californiaDesc: string;
    californiaNote: string;
    euRegulatoryTitle: string;
    euRegulatoryDesc: string;
    euRegulatoryNote: string;
    materialHierarchyTitle: string;
    preferred: string;
    siliconeElastomers: string;
    zeroPfas: string;
    comparablePerformance: string;
    lowerCost: string;
    caution: string;
    uncertainComposition: string;
    verifyMaterials: string;
    limitedSweat: string;
    regularCleaning: string;
    avoid: string;
    fluoroelastomers: string;
    pfhxaContamination: string;
    sweatEnhancementRisk: string;
    highCostNotSafety: string;
  };
  synth: {
    sectionTitle: string;
    sectionDesc: string;
    matrixTitle: string;
    watchTitle: string;
    watchSubtitle: string;
    sarValue: string;
    safetyMarginLabel: string;
    regulatoryStatus: string;
    exceptional: string;
    iphoneTitle: string;
    iphoneSubtitle: string;
    peakTorque: string;
    equivalentLoad: string;
    structuralStatus: string;
    exceedsTolerance: string;
    bandsTitle: string;
    bandsSubtitle: string;
    maxPfhxa: string;
    absorptionRisk: string;
    sweatEnhanced: string;
    exposureStatus: string;
    critical: string;
    paradoxTitle: string;
    paradoxDesc: string;
    riskPurchasing: string;
    riskPurchasingDesc: string;
    concentratedTitle: string;
    concentratedDesc: string;
    anatomicalConsideration: string;
    anatomicalConsiderationDesc: string;
    strategyTitle: string;
    commTitle: string;
    commItems: string[];
    postureTitle: string;
    postureItems: string[];
    materialTitle: string;
    materialItems: string[];
    finalTitle: string;
    finalDesc: string;
    watchMarginDesc: string;
    flexionDesc: string;
    pfhxaDesc: string;
  };
  refs: {
    title: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    lang: 'English',
    toc: {
      title: 'Contents',
      executiveSummary: 'Executive Summary',
      rfExposure: '1. RF Exposure Analysis',
      sarFramework: 'Regulatory Framework',
      appleWatchSar: 'Apple Watch Series 10',
      iphoneSar: 'iPhone 16/17 SAR',
      sarComparison: 'Comparative Assessment',
      biomechanics: '2. Biomechanical Impact',
      anatomicalParams: 'Anatomical Parameters',
      torqueCalculations: 'Torque Analysis',
      c1Considerations: 'C1 Atlas Structure',
      postureImplications: 'Posture Implications',
      pfasExposure: '3. PFAS Dermal Transfer',
      materialComposition: 'Material Composition',
      transferMechanisms: 'Transfer Mechanisms',
      exposureContext: 'Exposure Context',
      riskMitigation: 'Risk Mitigation',
      synthesis: '4. Risk Synthesis',
    },
    hero: {
      badge: 'Comparative Technology Risk Analysis',
      titleItalic: 'Quantifying the Hidden Costs',
      titleMain: 'of Wearable Technology',
      subtitle: 'A comprehensive analysis of RF energy exposure, biomechanical loading, and chemical transfer risks in consumer electronics',
      imageCaption: '"The intersection of convenience and consequence in the digital age"',
      summaryTitle: 'Executive Summary',
      rfTitle: 'RF Exposure',
      rfDesc: 'Apple Watch Series 10 demonstrates exceptional conservatism with 25× safety margin',
      rfLimit: 'vs. 4.0 W/kg limit',
      bioTitle: 'Biomechanical Load',
      bioDesc: '60° smartphone flexion creates torque exceeding structural tolerance',
      bioUnit: '27 kg equivalent load',
      chemTitle: 'Chemical Transfer',
      chemDesc: 'Premium wristbands contain unprecedented PFAS concentrations',
      chemUnit: 'PFHxA detected',
    },
    rf: {
      sectionTitle: 'Specific Absorption Rate (SAR) Analysis',
      sectionDesc: 'A comparative examination of radiofrequency energy exposure across device categories, revealing fundamental differences in safety margins and regulatory compliance.',
      frameworkTitle: '1.1 Regulatory Framework and Measurement Standards',
      sarLimitsTitle: 'SAR Limits by Body Region',
      torsoHead: 'Torso & Head',
      extremities: 'Extremities',
      limitsNote: 'Limits established by FCC and ICNIRP standards',
      testConfigTitle: 'Testing Configurations',
      testStandard: 'Standard Cellular',
      testStandardDesc: 'Single-radio operation baseline',
      testSimultaneous: 'Simultaneous Multi-TX',
      testSimultaneousDesc: 'Worst-case realistic exposure',
      testBodyWorn: 'Body-worn 5mm',
      testBodyWornDesc: 'Pocket/holster simulation',
      watchTitle: '1.2 Apple Watch Series 10 SAR Values',
      limbSar: 'Limb SAR',
      ofExtremityLimit: 'of extremity limit',
      safetyMargin: 'safety margin',
      headSar: 'Head SAR',
      ofHeadLimit: 'of head limit',
      exemplary: 'Exemplary',
      safetyMarginLabel: 'Safety Margin',
      exceptionalConservatism: 'Exceptional conservatism',
      engineeringExcellence: 'Engineering excellence',
      transmissionTitle: 'Transmission Mode Hierarchy',
      ble: 'Bluetooth Low Energy',
      bleNote: 'Negligible SAR contribution',
      wifi: 'Wi-Fi',
      wifiNote: 'Minimal impact',
      cellular: 'Cellular (LTE/5G)',
      cellularNote: 'Dominant but rare',
      iphoneTitle: '1.3 iPhone 16/17 SAR Values',
      iphone16Standard: 'iPhone 16 - Standard Cellular',
      bodyWornAt5mm: 'Body-worn at 5mm',
      ofTorsoLimit: '% of Torso Limit:',
      iphone16Simultaneous: 'iPhone 16 - Simultaneous TX',
      cellularWifi: 'Cellular + Wi-Fi',
      marginCompression: 'Safety Margin:',
      iphone17Title: 'iPhone 17 Evolution',
      cellularSar: 'Cellular SAR',
      simultaneousSar: 'Simultaneous SAR',
      iphone17Note: 'Marginal changes reflect engineering optimization within fixed regulatory constraints',
      comparisonTitle: '1.4 Comparative Assessment',
      magnitudeDiffTitle: 'Magnitude Differential Analysis',
      absoluteDiff: 'Absolute SAR Differential',
      normalizedMargin: 'Normalized Margin',
      watchMargin: 'Apple Watch Margin',
      timeAveraged: 'Time-Averaged Exposure',
      riskHierarchyTitle: 'Device Risk Hierarchy',
      deviceRiskAssessment: 'Device Risk Assessment',
      rfExposureRisk: 'RF Exposure Risk',
      biomechanicalRisk: 'Biomechanical Risk',
      chemicalTransferRisk: 'Chemical Transfer Risk',
      margin: 'margin',
      noTorque: 'No torque',
      load: 'load',
      highRisk: 'High risk',
      moderateRisk: 'Moderate risk',
      lowRisk: 'Low risk',
      variable: 'Variable',
      fluorine: 'fluorine',
      regulatoryMarginTitle: 'Regulatory Margin Analysis',
      exceptionalMarginDesc: 'Exceptional conservatism with 25× margin',
      prudentCompliance: 'Prudent compliance with 1.7× margin',
      marginCompressionDesc: 'Margin compression at 1.3×',
      neutralFlexion: '0° Neutral',
      mildFlexion: '15° Flexion',
      moderateFlexion: '30° Flexion',
      severeFlexion: '60° Flexion',
      premiumBands: 'Premium Bands',
      midRangeBands: 'Mid-range Bands',
      siliconeBands: 'Silicone Bands',
    },
    bio: {
      sectionTitle: 'C1 Atlas Vertebra Loading Analysis',
      sectionDesc: 'Quantifying the biomechanical consequences of smartphone-induced head flexion, revealing torque levels approaching structural failure thresholds.',
      paramsTitle: '2.1 Anatomical and Physical Parameters',
      headMassTitle: 'Head Mass Assumptions',
      adultMale: 'Adult Male',
      adultFemale: 'Adult Female',
      standardModel: 'Standard Model',
      gravitationalForce: 'Gravitational Force',
      leverageTitle: 'Leverage System Geometry',
      pivotLocation: 'Pivot Location',
      pivotValue: 'Occipital condyle centers',
      leverArm: 'Effective Lever Arm (d)',
      comPosition: 'COM Position',
      comValue: '1–2 cm anterior to auditory meatus',
      spineCaption: 'The cervical spine functions as a complex kinematic chain with the atlanto-occipital joint serving as the primary pivot for sagittal plane motion.',
      torqueTitle: '2.2 Torque Calculations by Flexion Angle',
      methodologyTitle: 'Methodology',
      headWeight: 'head weight',
      leverArmLabel: 'lever arm',
      flexionAngle: 'flexion angle from vertical',
      methodNote: 'Quasi-static formulation neglecting dynamic effects, representing external flexion moment requiring internal stabilization.',
      neutral: '0° Neutral',
      neutralDesc: 'τ = 0 N·m (unstable equilibrium)',
      mild: '15° Mild Flexion',
      mildDesc: 'τ = 2.85 N·m (12 kg equivalent)',
      moderate: '30° Moderate Flexion',
      moderateDesc: 'τ = 5.51 N·m (18 kg equivalent)',
      severe: '60° Severe Flexion',
      severeDesc: 'τ = 9.55 N·m (27 kg equivalent)',
      progressiveTitle: 'Progressive Loading Chart',
      progressiveNote: 'Torque increases nonlinearly with flexion angle, with severe angles approaching structural failure thresholds',
      c1Title: '2.3 C1 Atlas Structural Considerations',
      normalCapacityTitle: 'Normal Physiological Capacity',
      feaValidation: 'Finite Element Validation',
      feaValue: '1.5 N·m normal range',
      cadavericTesting: 'Cadaveric Testing',
      cadavericValue: '8.51 ± 1.04 N·m failure threshold',
      ligamentousInjury: 'Ligamentous Injury',
      ligamentousValue: '13.6–17.2 N·m lower bound',
      safetyErosionTitle: 'Safety Factor Erosion',
      flexion15: '15° Flexion',
      exceedsFea: 'Exceeds FEA validation',
      flexion30: '30° Flexion',
      belowCadaveric: '1.54× below cadaveric capacity',
      flexion60: '60° Flexion',
      exceedsCapacity: 'Exceeds normal capacity',
      criticalThreshold: 'Critical threshold at 30° flexion',
      pathologicalTitle: 'Pathological Thresholds',
      romIncrease: 'ROM Increase',
      segmentalInstability: 'Segmental instability',
      c1RingFracture: 'C1 Ring Fracture',
      fatigueMicrodamage: 'Fatigue microdamage',
      discDegeneration: 'Disc Degeneration',
      acceleratedAging: 'Accelerated aging',
      postureTitle: '2.4 Implications for Sustained Posture',
      acuteChronicTitle: 'Acute vs. Chronic Loading',
      acuteLabel: 'Acute (Single Session)',
      acuteDesc: 'Muscular fatigue, reversible with rest',
      subacuteLabel: 'Subacute (Days-Weeks)',
      subacuteDesc: 'Ligamentous creep, reversible with intervention',
      chronicLabel: 'Chronic (Months-Years)',
      chronicDesc: 'Disc degeneration, largely irreversible',
      c0c1Title: 'C0–C1 Joint Contribution',
      totalFlexion: '~60% of total flexion',
      concentrated: 'Concentrated at single level',
      c2c7: 'C2–C7 minimal',
      reducedLoad: 'Reduced load sharing',
      compensatoryKyphosis: 'Compensatory kyphosis',
      transmittedLoad: 'Transmitted load to thoracolumbar junction',
      kinematicTitle: 'Kinematic Concentration Effect',
      kinematicDesc: 'Motion concentration at C0–C1 rather than distribution across cervical segments',
      kinematicNote: 'Intensifies local tissue stress and reduces adaptive capacity',
      c0c1Motion: 'C0–C1 Motion',
      thoracicCompensation: 'Thoracic Compensation',
      c2c7Contribution: 'C2–C7 Contribution',
    },
    pfas: {
      sectionTitle: 'PFAS Dermal Transfer Analysis',
      sectionDesc: 'Investigation of perfluoroalkyl substance transfer from premium wristbands during athletic activity, revealing unprecedented chemical concentrations and enhanced absorption mechanisms.',
      materialTitle: '3.1 Material Composition and PFAS Presence',
      fluoroelastomerTitle: 'Fluoroelastomer Characteristics',
      chemicalStability: 'Chemical Stability',
      chemicalStabilityValue: 'C-F bond strength: ~485 kJ/mol',
      lowSurfaceEnergy: 'Low Surface Energy',
      lowSurfaceEnergyValue: 'Fluorine shielding effect',
      mechanicalDurability: 'Mechanical Durability',
      mechanicalDurabilityValue: 'Cross-linked elastomer network',
      pfhxaTitle: 'PFHxA Detection',
      medianConcentration: 'Median Concentration',
      medianValue: '~800 ppb PFHxA',
      maximumDetected: 'Maximum Detected',
      maximumValue: '>16,000 ppb (16 ppm)',
      detectionRate: 'Detection Rate',
      detectionValue: '9 of 22 bands tested',
      priceParadoxTitle: 'Price-Concentration Paradox',
      premium: 'Premium (>$30)',
      premiumFluorine: '49.7–90.7% fluorine',
      premiumDetection: '100% PFHxA detection',
      highestRisk: 'HIGHEST RISK',
      midRange: 'Mid-range ($15-30)',
      midRangeFluorine: 'Variable fluorine',
      partialDetection: 'Partial detection',
      moderateRiskLabel: 'MODERATE RISK',
      budget: 'Budget (<$15)',
      budgetFluorine: '<1% fluorine',
      zeroDetection: '0% detection',
      lowestRisk: 'LOWEST RISK',
      paradoxNote: 'University of Notre Dame study findings reveal inverse safety-quality relationship',
      transferTitle: '3.2 Dermal Transfer Mechanisms',
      sweatTitle: 'Sweat-Mediated Enhancement',
      elevatedTemp: 'Elevated Skin Temperature',
      elevatedTempValue: '2–5× permeability increase per 10°C',
      poreDilation: 'Sweat Pore Dilation',
      poreDilationValue: 'Bypasses stratum corneum barrier',
      hydration: 'Hydration/Occlusion',
      hydrationValue: 'Sustained enhanced permeability',
      mechanicalFriction: 'Mechanical Friction',
      mechanicalFrictionValue: 'Enhanced PFAS mobilization',
      absorptionTitle: 'Absorption Efficiency',
      inVitroTitle: 'In Vitro Studies',
      inVitroDesc: 'Topical absorption potential',
      skinModelTitle: '3D Human Skin Model',
      skinModelValue: '>50%',
      skinModelDesc: '>36% systemic distribution',
      biomonitoringTitle: 'Population Biomonitoring',
      biomonitoringValue: '3rd Most Common',
      biomonitoringDesc: 'PFAS in Swedish study',
      transdermalTitle: 'Transdermal Enhancement Factors',
      physiologicalTitle: 'Physiological Enhancement',
      tempElevation: 'Temperature Elevation',
      vasodilation: 'Vasodilation',
      bloodFlow: '↑ Blood Flow',
      poreDilationLabel: 'Pore Dilation',
      surfaceArea: '↑ Surface Area',
      mechanicalTitle: 'Mechanical Enhancement',
      friction: 'Friction',
      surfaceDisruption: 'Surface Disruption',
      occlusion: 'Occlusion',
      hydrationMaintenance: 'Hydration Maintenance',
      pressure: 'Pressure',
      contactIntimacy: 'Contact Intimacy',
      transdermalNote: 'Athletic activity creates multiplicative enhancement approaching pharmaceutical transdermal patch conditions',
      exposureTitle: '3.3 Exposure Context Factors',
      usagePatternsTitle: 'Usage Patterns',
      wearDuration: 'Wear Duration',
      wearDurationValue: '12+ hours continuous',
      activityFrequency: 'Activity Frequency',
      activityFrequencyValue: '3–7 sessions/week',
      sessionLength: 'Session Length',
      sessionLengthValue: '30–90 minutes',
      annualExposure: 'Annual Exposure',
      annualExposureValue: '500–1000 hours',
      regulatoryStatusTitle: 'Regulatory Status',
      euTitle: 'European Union',
      euStatus: 'Effectively banned (2026)',
      euNote: '25 ppb limit in substances',
      usTitle: 'United States',
      usStatus: 'No federal limits',
      usNote: 'EPA health advisory only',
      epaTitle: 'EPA Assessment',
      epaStatus: 'Liver toxicant identified',
      epaNote: 'Blood cell disruptor',
      exerciseCaption: 'Intentional sweat-inducing use of fitness trackers creates systematic exposure maximization, with users encouraged to maintain device contact precisely when dermal permeability is highest.',
      behavioralTitle: 'Behavioral Reinforcement of High-Exposure Conditions',
      sportPositioning: 'Sport Positioning',
      sportPositioningDesc: 'Explicit workout marketing',
      sweatEnhancement: 'Sweat Enhancement',
      sweatEnhancementDesc: 'Peak absorption conditions',
      sustainedWear: 'Sustained Wear',
      sustainedWearDesc: '12+ hour continuous contact',
      mitigationTitle: '3.4 Risk Mitigation Recommendations',
      consumerGuidanceTitle: 'Consumer Guidance',
      materialSubstitution: 'Material Substitution',
      materialSubstitutionDesc: 'Silicone-based alternatives',
      materialSubstitutionEffect: '>90% exposure elimination',
      productScreening: 'Product Screening',
      productScreeningDesc: 'Avoid "fluoroelastomer," "Viton," "FKM"',
      productScreeningEffect: 'Prevents intentional PFAS selection',
      durationLimitation: 'Duration Limitation',
      durationLimitationDesc: 'Remove during high-sweat activities',
      durationLimitationEffect: 'Reduces peak absorption conditions',
      manufacturerTitle: 'Manufacturer Responsibility',
      pfasFreeTitle: 'PFAS-free Development',
      pfasFreeDesc: 'Eliminate exposure at source',
      pfasFreeNote: 'Active research; limited commercial deployment',
      explicitDisclosure: 'Explicit Disclosure',
      explicitDisclosureDesc: 'Enable informed consumer choice',
      explicitDisclosureNote: 'Voluntary; inconsistent implementation',
      standardizedTesting: 'Standardized Testing',
      standardizedTestingDesc: 'Quantify realistic exposure',
      standardizedTestingNote: 'Not yet established',
      legalTitle: 'Legal and Regulatory Developments',
      californiaTitle: 'California Class Action (January 2025)',
      californiaDesc: 'Apple litigation for undisclosed PFAS',
      californiaNote: 'Increasing legal and reputational risk',
      euRegulatoryTitle: 'EU Regulatory Leadership',
      euRegulatoryDesc: '2026 phase-out with 25 ppb limit',
      euRegulatoryNote: 'Market fragmentation concern',
      materialHierarchyTitle: 'Recommended Material Hierarchy',
      preferred: 'Preferred',
      siliconeElastomers: 'Silicone Elastomers',
      zeroPfas: 'Zero PFAS content',
      comparablePerformance: 'Comparable performance',
      lowerCost: 'Lower cost',
      caution: 'Caution',
      uncertainComposition: 'Uncertain Composition',
      verifyMaterials: 'Verify materials',
      limitedSweat: 'Limited sweat exposure',
      regularCleaning: 'Regular cleaning',
      avoid: 'Avoid',
      fluoroelastomers: 'Fluoroelastomers',
      pfhxaContamination: 'PFHxA contamination',
      sweatEnhancementRisk: 'Sweat enhancement',
      highCostNotSafety: 'High cost ≠ safety',
    },
    synth: {
      sectionTitle: 'Integrated Risk Assessment',
      sectionDesc: 'Synthesizing findings across analytical domains to inform evidence-based consumer guidance and identify systemic risk patterns in wearable technology.',
      matrixTitle: 'Device Risk Comparison Matrix',
      watchTitle: 'Apple Watch Series 10',
      watchSubtitle: 'RF Exposure Analysis',
      sarValue: 'SAR Value:',
      safetyMarginLabel: 'Safety Margin:',
      regulatoryStatus: 'Regulatory Status:',
      exceptional: 'Exceptional',
      iphoneTitle: 'iPhone 16/17',
      iphoneSubtitle: 'Biomechanical Loading',
      peakTorque: 'Peak Torque (60°):',
      equivalentLoad: 'Equivalent Load:',
      structuralStatus: 'Structural Status:',
      exceedsTolerance: 'Exceeds Tolerance',
      bandsTitle: 'Premium Wristbands',
      bandsSubtitle: 'Chemical Transfer',
      maxPfhxa: 'Max PFHxA:',
      absorptionRisk: 'Absorption Risk:',
      sweatEnhanced: 'Sweat-Enhanced',
      exposureStatus: 'Exposure Status:',
      critical: 'Critical',
      paradoxTitle: 'Premium Positioning Paradox',
      paradoxDesc: 'Higher expenditure correlates with elevated risk across both device categories: premium smartphones exhibit narrower SAR margins while premium wristbands contain higher PFAS concentrations.',
      riskPurchasing: 'Risk-Informed Purchasing',
      riskPurchasingDesc: 'Price ≠ Safety; explicit evaluation required',
      concentratedTitle: 'Concentrated Risk Exposure',
      concentratedDesc: 'Both smartphone-induced cervical loading and premium wristband PFAS exposure concentrate risk at single anatomical sites rather than distributing across systems.',
      anatomicalConsideration: 'Anatomical Consideration',
      anatomicalConsiderationDesc: 'C0–C1 joint and wrist dermal exposure',
      strategyTitle: 'Consumer Risk Mitigation Strategy',
      commTitle: 'Communication Hierarchy',
      commItems: [
        'Prefer Apple Watch for notifications',
        'Reserve iPhone for display-intensive tasks',
        'Use speakerphone for extended calls',
        'Minimize pocket-carried phone time',
      ],
      postureTitle: 'Postural Hygiene',
      postureItems: [
        'Elevate devices to eye level',
        '2-minute breaks every 20 minutes',
        'Strengthen cervical stabilizers',
        'Maintain neutral head position',
      ],
      materialTitle: 'Material Selection',
      materialItems: [
        'Verify silicone composition',
        'Avoid fluoroelastomer materials',
        'Remove bands during exercise',
        'Prioritize budget non-fluorinated options',
      ],
      finalTitle: 'Risk-Conscious Technology Integration',
      finalDesc: 'The convergence of wireless capability expansion, immersive device engagement, and chemical exposure from "performance" materials creates compound risk scenarios requiring systemic exposure reduction through behavioral modification, material substitution, and regulatory advancement.',
      watchMarginDesc: 'Apple Watch safety margin demonstrates exceptional engineering',
      flexionDesc: 'Flexion threshold for severe biomechanical loading',
      pfhxaDesc: 'PPb PFHxA in premium wristbands requires immediate attention',
    },
    refs: {
      title: 'References',
    },
  },
  de: {
    lang: 'Deutsch',
    toc: {
      title: 'Inhaltsverzeichnis',
      executiveSummary: 'Zusammenfassung',
      rfExposure: '1. HF-Strahlenanalyse',
      sarFramework: 'Regulatorischer Rahmen',
      appleWatchSar: 'Apple Watch Series 10',
      iphoneSar: 'iPhone 16/17 SAR',
      sarComparison: 'Vergleichende Bewertung',
      biomechanics: '2. Biomechanische Belastung',
      anatomicalParams: 'Anatomische Parameter',
      torqueCalculations: 'Drehmomentanalyse',
      c1Considerations: 'C1-Atlas-Struktur',
      postureImplications: 'Auswirkungen auf die Haltung',
      pfasExposure: '3. PFAS-Dermaltransfer',
      materialComposition: 'Materialzusammensetzung',
      transferMechanisms: 'Transfermechanismen',
      exposureContext: 'Expositionskontext',
      riskMitigation: 'Risikominderung',
      synthesis: '4. Risikosynthese',
    },
    hero: {
      badge: 'Vergleichende Technologie-Risikoanalyse',
      titleItalic: 'Quantifizierung der verborgenen Kosten',
      titleMain: 'tragbarer Technologie',
      subtitle: 'Eine umfassende Analyse der HF-Energieexposition, biomechanischen Belastung und chemischen Transferrisiken in der Unterhaltungselektronik',
      imageCaption: '„Die Schnittstelle zwischen Bequemlichkeit und Konsequenz im digitalen Zeitalter"',
      summaryTitle: 'Zusammenfassung',
      rfTitle: 'HF-Exposition',
      rfDesc: 'Apple Watch Series 10 zeigt außergewöhnliche Konservativität mit 25× Sicherheitsmarge',
      rfLimit: 'ggü. 4,0 W/kg Grenzwert',
      bioTitle: 'Biomechanische Last',
      bioDesc: '60° Smartphone-Beugung erzeugt Drehmoment über der Strukturtoleranz',
      bioUnit: '27 kg äquivalente Last',
      chemTitle: 'Chemischer Transfer',
      chemDesc: 'Premium-Armbänder enthalten beispiellose PFAS-Konzentrationen',
      chemUnit: 'PFHxA nachgewiesen',
    },
    rf: {
      sectionTitle: 'Analyse der Spezifischen Absorptionsrate (SAR)',
      sectionDesc: 'Eine vergleichende Untersuchung der Hochfrequenzenergie-Exposition über Gerätekategorien hinweg, die grundlegende Unterschiede in Sicherheitsmargen und regulatorischer Konformität aufzeigt.',
      frameworkTitle: '1.1 Regulatorischer Rahmen und Messstandards',
      sarLimitsTitle: 'SAR-Grenzwerte nach Körperregion',
      torsoHead: 'Rumpf & Kopf',
      extremities: 'Extremitäten',
      limitsNote: 'Grenzwerte nach FCC- und ICNIRP-Standards festgelegt',
      testConfigTitle: 'Testkonfigurationen',
      testStandard: 'Standard-Mobilfunk',
      testStandardDesc: 'Einzelfunk-Basisbetrieb',
      testSimultaneous: 'Simultane Multi-TX',
      testSimultaneousDesc: 'Worst-Case realistische Exposition',
      testBodyWorn: 'Körpernah 5mm',
      testBodyWornDesc: 'Taschen-/Holster-Simulation',
      watchTitle: '1.2 Apple Watch Series 10 SAR-Werte',
      limbSar: 'Extremitäten-SAR',
      ofExtremityLimit: 'des Extremitäten-Grenzwerts',
      safetyMargin: 'Sicherheitsmarge',
      headSar: 'Kopf-SAR',
      ofHeadLimit: 'des Kopf-Grenzwerts',
      exemplary: 'Vorbildlich',
      safetyMarginLabel: 'Sicherheitsmarge',
      exceptionalConservatism: 'Außergewöhnliche Konservativität',
      engineeringExcellence: 'Ingenieursexzellenz',
      transmissionTitle: 'Hierarchie der Übertragungsmodi',
      ble: 'Bluetooth Low Energy',
      bleNote: 'Vernachlässigbarer SAR-Beitrag',
      wifi: 'WLAN',
      wifiNote: 'Minimale Auswirkung',
      cellular: 'Mobilfunk (LTE/5G)',
      cellularNote: 'Dominant, aber selten',
      iphoneTitle: '1.3 iPhone 16/17 SAR-Werte',
      iphone16Standard: 'iPhone 16 – Standard-Mobilfunk',
      bodyWornAt5mm: 'Körpernah bei 5mm',
      ofTorsoLimit: '% des Rumpf-Grenzwerts:',
      iphone16Simultaneous: 'iPhone 16 – Simultaner TX',
      cellularWifi: 'Mobilfunk + WLAN',
      marginCompression: 'Sicherheitsmarge:',
      iphone17Title: 'iPhone 17 Entwicklung',
      cellularSar: 'Mobilfunk-SAR',
      simultaneousSar: 'Simultane SAR',
      iphone17Note: 'Marginale Änderungen spiegeln Ingenieursoptimierung innerhalb fester regulatorischer Grenzen wider',
      comparisonTitle: '1.4 Vergleichende Bewertung',
      magnitudeDiffTitle: 'Analyse der Größenordnungsdifferenz',
      absoluteDiff: 'Absolute SAR-Differenz',
      normalizedMargin: 'Normalisierte Marge',
      watchMargin: 'Apple Watch Marge',
      timeAveraged: 'Zeitgemittelte Exposition',
      riskHierarchyTitle: 'Geräte-Risikohierarchie',
      deviceRiskAssessment: 'Geräte-Risikobewertung',
      rfExposureRisk: 'HF-Expositionsrisiko',
      biomechanicalRisk: 'Biomechanisches Risiko',
      chemicalTransferRisk: 'Chemisches Transferrisiko',
      margin: 'Marge',
      noTorque: 'Kein Drehmoment',
      load: 'Last',
      highRisk: 'Hohes Risiko',
      moderateRisk: 'Mittleres Risiko',
      lowRisk: 'Geringes Risiko',
      variable: 'Variabel',
      fluorine: 'Fluorgehalt',
      regulatoryMarginTitle: 'Regulatorische Margenanalyse',
      exceptionalMarginDesc: 'Außergewöhnliche Konservativität mit 25× Marge',
      prudentCompliance: 'Umsichtige Konformität mit 1,7× Marge',
      marginCompressionDesc: 'Margenkompression bei 1,3×',
      neutralFlexion: '0° Neutral',
      mildFlexion: '15° Beugung',
      moderateFlexion: '30° Beugung',
      severeFlexion: '60° Beugung',
      premiumBands: 'Premium-Armbänder',
      midRangeBands: 'Mittelklasse-Armbänder',
      siliconeBands: 'Silikon-Armbänder',
    },
    bio: {
      sectionTitle: 'Belastungsanalyse des C1-Atlas-Wirbels',
      sectionDesc: 'Quantifizierung der biomechanischen Folgen smartphone-induzierter Kopfbeugung, die Drehmomentniveaus nahe struktureller Versagensschwellen aufzeigt.',
      paramsTitle: '2.1 Anatomische und physikalische Parameter',
      headMassTitle: 'Kopfmasse-Annahmen',
      adultMale: 'Erwachsener Mann',
      adultFemale: 'Erwachsene Frau',
      standardModel: 'Standardmodell',
      gravitationalForce: 'Gravitationskraft',
      leverageTitle: 'Hebelsystem-Geometrie',
      pivotLocation: 'Drehpunktlage',
      pivotValue: 'Okzipitale Kondylenzentren',
      leverArm: 'Effektiver Hebelarm (d)',
      comPosition: 'Schwerpunktposition',
      comValue: '1–2 cm anterior zum Gehörgang',
      spineCaption: 'Die Halswirbelsäule funktioniert als komplexe kinematische Kette, wobei das Atlanto-Okzipitalgelenk als primärer Drehpunkt für die Sagittalebene dient.',
      torqueTitle: '2.2 Drehmomentberechnungen nach Beugungswinkel',
      methodologyTitle: 'Methodik',
      headWeight: 'Kopfgewicht',
      leverArmLabel: 'Hebelarm',
      flexionAngle: 'Beugungswinkel zur Vertikalen',
      methodNote: 'Quasi-statische Formulierung unter Vernachlässigung dynamischer Effekte, die das externe Beugungsmoment darstellt, das interne Stabilisierung erfordert.',
      neutral: '0° Neutral',
      neutralDesc: 'τ = 0 N·m (labiles Gleichgewicht)',
      mild: '15° Leichte Beugung',
      mildDesc: 'τ = 2,85 N·m (12 kg äquivalent)',
      moderate: '30° Mittlere Beugung',
      moderateDesc: 'τ = 5,51 N·m (18 kg äquivalent)',
      severe: '60° Schwere Beugung',
      severeDesc: 'τ = 9,55 N·m (27 kg äquivalent)',
      progressiveTitle: 'Progressives Belastungsdiagramm',
      progressiveNote: 'Das Drehmoment steigt nichtlinear mit dem Beugungswinkel, wobei schwere Winkel sich strukturellen Versagensschwellen nähern',
      c1Title: '2.3 Strukturelle Aspekte des C1-Atlas',
      normalCapacityTitle: 'Normale physiologische Kapazität',
      feaValidation: 'Finite-Elemente-Validierung',
      feaValue: '1,5 N·m Normalbereich',
      cadavericTesting: 'Kadavertestung',
      cadavericValue: '8,51 ± 1,04 N·m Versagensschwelle',
      ligamentousInjury: 'Bandverletzung',
      ligamentousValue: '13,6–17,2 N·m untere Grenze',
      safetyErosionTitle: 'Erosion des Sicherheitsfaktors',
      flexion15: '15° Beugung',
      exceedsFea: 'Überschreitet FEA-Validierung',
      flexion30: '30° Beugung',
      belowCadaveric: '1,54× unter Kadaverkapazität',
      flexion60: '60° Beugung',
      exceedsCapacity: 'Überschreitet Normalkapazität',
      criticalThreshold: 'Kritische Schwelle bei 30° Beugung',
      pathologicalTitle: 'Pathologische Schwellenwerte',
      romIncrease: 'ROM-Zunahme',
      segmentalInstability: 'Segmentale Instabilität',
      c1RingFracture: 'C1-Ringfraktur',
      fatigueMicrodamage: 'Ermüdungs-Mikroschäden',
      discDegeneration: 'Bandscheibendegeneration',
      acceleratedAging: 'Beschleunigte Alterung',
      postureTitle: '2.4 Auswirkungen auf die Dauerhaltung',
      acuteChronicTitle: 'Akute vs. Chronische Belastung',
      acuteLabel: 'Akut (Einzelsitzung)',
      acuteDesc: 'Muskelermüdung, reversibel mit Ruhe',
      subacuteLabel: 'Subakut (Tage–Wochen)',
      subacuteDesc: 'Bandkriechen, reversibel mit Intervention',
      chronicLabel: 'Chronisch (Monate–Jahre)',
      chronicDesc: 'Bandscheibendegeneration, weitgehend irreversibel',
      c0c1Title: 'C0–C1 Gelenkbeitrag',
      totalFlexion: '~60% der Gesamtbeugung',
      concentrated: 'Auf eine Ebene konzentriert',
      c2c7: 'C2–C7 minimal',
      reducedLoad: 'Reduzierte Lastverteilung',
      compensatoryKyphosis: 'Kompensatorische Kyphose',
      transmittedLoad: 'Lastübertragung auf thorakolumbalen Übergang',
      kinematicTitle: 'Kinematischer Konzentrationseffekt',
      kinematicDesc: 'Bewegungskonzentration am C0–C1 statt Verteilung über zervikale Segmente',
      kinematicNote: 'Verstärkt lokalen Gewebestress und reduziert Anpassungskapazität',
      c0c1Motion: 'C0–C1 Bewegung',
      thoracicCompensation: 'Thorakale Kompensation',
      c2c7Contribution: 'C2–C7 Beitrag',
    },
    pfas: {
      sectionTitle: 'PFAS-Dermaltransferanalyse',
      sectionDesc: 'Untersuchung des Perfluoralkylsubstanz-Transfers von Premium-Armbändern bei sportlicher Aktivität, die beispiellose chemische Konzentrationen und verstärkte Absorptionsmechanismen aufzeigt.',
      materialTitle: '3.1 Materialzusammensetzung und PFAS-Präsenz',
      fluoroelastomerTitle: 'Fluorelastomer-Eigenschaften',
      chemicalStability: 'Chemische Stabilität',
      chemicalStabilityValue: 'C-F Bindungsstärke: ~485 kJ/mol',
      lowSurfaceEnergy: 'Niedrige Oberflächenenergie',
      lowSurfaceEnergyValue: 'Fluor-Abschirmungseffekt',
      mechanicalDurability: 'Mechanische Beständigkeit',
      mechanicalDurabilityValue: 'Vernetztes Elastomer-Netzwerk',
      pfhxaTitle: 'PFHxA-Nachweis',
      medianConcentration: 'Mediankonzentration',
      medianValue: '~800 ppb PFHxA',
      maximumDetected: 'Maximum nachgewiesen',
      maximumValue: '>16.000 ppb (16 ppm)',
      detectionRate: 'Nachweisrate',
      detectionValue: '9 von 22 getesteten Bändern',
      priceParadoxTitle: 'Preis-Konzentrations-Paradoxon',
      premium: 'Premium (>30$)',
      premiumFluorine: '49,7–90,7% Fluorgehalt',
      premiumDetection: '100% PFHxA-Nachweis',
      highestRisk: 'HÖCHSTES RISIKO',
      midRange: 'Mittelklasse (15–30$)',
      midRangeFluorine: 'Variabler Fluorgehalt',
      partialDetection: 'Teilweiser Nachweis',
      moderateRiskLabel: 'MITTLERES RISIKO',
      budget: 'Budget (<15$)',
      budgetFluorine: '<1% Fluorgehalt',
      zeroDetection: '0% Nachweis',
      lowestRisk: 'GERINGSTES RISIKO',
      paradoxNote: 'Studienergebnisse der Universität Notre Dame zeigen umgekehrtes Sicherheits-Qualitäts-Verhältnis',
      transferTitle: '3.2 Dermale Transfermechanismen',
      sweatTitle: 'Schweißvermittelte Verstärkung',
      elevatedTemp: 'Erhöhte Hauttemperatur',
      elevatedTempValue: '2–5× Permeabilitätssteigerung pro 10°C',
      poreDilation: 'Schweißporendilatation',
      poreDilationValue: 'Umgeht Stratum-corneum-Barriere',
      hydration: 'Hydratation/Okklusion',
      hydrationValue: 'Anhaltend erhöhte Permeabilität',
      mechanicalFriction: 'Mechanische Reibung',
      mechanicalFrictionValue: 'Verstärkte PFAS-Mobilisierung',
      absorptionTitle: 'Absorptionseffizienz',
      inVitroTitle: 'In-vitro-Studien',
      inVitroDesc: 'Topisches Absorptionspotenzial',
      skinModelTitle: '3D-Hautmodell',
      skinModelValue: '>50%',
      skinModelDesc: '>36% systemische Verteilung',
      biomonitoringTitle: 'Populationsbiomonitoring',
      biomonitoringValue: 'Dritthäufigste',
      biomonitoringDesc: 'PFAS in schwedischer Studie',
      transdermalTitle: 'Transdermale Verstärkungsfaktoren',
      physiologicalTitle: 'Physiologische Verstärkung',
      tempElevation: 'Temperaturerhöhung',
      vasodilation: 'Vasodilatation',
      bloodFlow: '↑ Blutfluss',
      poreDilationLabel: 'Porendilatation',
      surfaceArea: '↑ Oberfläche',
      mechanicalTitle: 'Mechanische Verstärkung',
      friction: 'Reibung',
      surfaceDisruption: 'Oberflächenstörung',
      occlusion: 'Okklusion',
      hydrationMaintenance: 'Hydratationserhaltung',
      pressure: 'Druck',
      contactIntimacy: 'Kontaktintimität',
      transdermalNote: 'Sportliche Aktivität erzeugt multiplikative Verstärkung, die sich pharmazeutischen transdermalen Pflasterbedingungen annähert',
      exposureTitle: '3.3 Expositionskontextfaktoren',
      usagePatternsTitle: 'Nutzungsmuster',
      wearDuration: 'Tragedauer',
      wearDurationValue: '12+ Stunden durchgehend',
      activityFrequency: 'Aktivitätshäufigkeit',
      activityFrequencyValue: '3–7 Einheiten/Woche',
      sessionLength: 'Sitzungsdauer',
      sessionLengthValue: '30–90 Minuten',
      annualExposure: 'Jährliche Exposition',
      annualExposureValue: '500–1000 Stunden',
      regulatoryStatusTitle: 'Regulatorischer Status',
      euTitle: 'Europäische Union',
      euStatus: 'Effektiv verboten (2026)',
      euNote: '25 ppb Grenzwert in Substanzen',
      usTitle: 'Vereinigte Staaten',
      usStatus: 'Keine Bundesgrenzwerte',
      usNote: 'Nur EPA-Gesundheitsempfehlung',
      epaTitle: 'EPA-Bewertung',
      epaStatus: 'Lebertoxikant identifiziert',
      epaNote: 'Blutzellenentwicklungsstörer',
      exerciseCaption: 'Die beabsichtigte schweißfördernde Nutzung von Fitness-Trackern schafft eine systematische Expositionsmaximierung, bei der Nutzer ermutigt werden, den Gerätekontakt genau dann aufrechtzuerhalten, wenn die dermale Permeabilität am höchsten ist.',
      behavioralTitle: 'Verhaltensverstärkung von Hochexpositionsbedingungen',
      sportPositioning: 'Sport-Positionierung',
      sportPositioningDesc: 'Explizites Workout-Marketing',
      sweatEnhancement: 'Schweißverstärkung',
      sweatEnhancementDesc: 'Maximale Absorptionsbedingungen',
      sustainedWear: 'Dauertragen',
      sustainedWearDesc: '12+ Stunden Dauerkontakt',
      mitigationTitle: '3.4 Empfehlungen zur Risikominderung',
      consumerGuidanceTitle: 'Verbraucherhinweise',
      materialSubstitution: 'Materialsubstitution',
      materialSubstitutionDesc: 'Silikonbasierte Alternativen',
      materialSubstitutionEffect: '>90% Expositionsreduzierung',
      productScreening: 'Produktscreening',
      productScreeningDesc: '„Fluorelastomer", „Viton", „FKM" vermeiden',
      productScreeningEffect: 'Verhindert gezielte PFAS-Auswahl',
      durationLimitation: 'Zeitliche Begrenzung',
      durationLimitationDesc: 'Bei starkem Schwitzen entfernen',
      durationLimitationEffect: 'Reduziert Spitzenabsorptionsbedingungen',
      manufacturerTitle: 'Herstellerverantwortung',
      pfasFreeTitle: 'PFAS-freie Entwicklung',
      pfasFreeDesc: 'Exposition an der Quelle eliminieren',
      pfasFreeNote: 'Aktive Forschung; begrenzte kommerzielle Umsetzung',
      explicitDisclosure: 'Explizite Offenlegung',
      explicitDisclosureDesc: 'Informierte Verbraucherentscheidung ermöglichen',
      explicitDisclosureNote: 'Freiwillig; inkonsistente Umsetzung',
      standardizedTesting: 'Standardisierte Testung',
      standardizedTestingDesc: 'Realistische Exposition quantifizieren',
      standardizedTestingNote: 'Noch nicht etabliert',
      legalTitle: 'Rechtliche und regulatorische Entwicklungen',
      californiaTitle: 'Sammelklage Kalifornien (Januar 2025)',
      californiaDesc: 'Apple-Klage wegen nicht offengelegter PFAS',
      californiaNote: 'Steigendes rechtliches und Reputationsrisiko',
      euRegulatoryTitle: 'EU-Regulierungsführerschaft',
      euRegulatoryDesc: '2026 Auslauf mit 25 ppb Grenzwert',
      euRegulatoryNote: 'Bedenken zur Marktfragmentierung',
      materialHierarchyTitle: 'Empfohlene Materialhierarchie',
      preferred: 'Bevorzugt',
      siliconeElastomers: 'Silikonelastomere',
      zeroPfas: 'Null PFAS-Gehalt',
      comparablePerformance: 'Vergleichbare Leistung',
      lowerCost: 'Geringere Kosten',
      caution: 'Vorsicht',
      uncertainComposition: 'Ungewisse Zusammensetzung',
      verifyMaterials: 'Materialien verifizieren',
      limitedSweat: 'Begrenzte Schweißexposition',
      regularCleaning: 'Regelmäßige Reinigung',
      avoid: 'Vermeiden',
      fluoroelastomers: 'Fluorelastomere',
      pfhxaContamination: 'PFHxA-Kontamination',
      sweatEnhancementRisk: 'Schweißverstärkung',
      highCostNotSafety: 'Hoher Preis ≠ Sicherheit',
    },
    synth: {
      sectionTitle: 'Integrierte Risikobewertung',
      sectionDesc: 'Synthese der Ergebnisse über analytische Bereiche hinweg zur Grundlage evidenzbasierter Verbraucherberatung und Identifizierung systemischer Risikomuster in tragbarer Technologie.',
      matrixTitle: 'Geräte-Risikovergleichsmatrix',
      watchTitle: 'Apple Watch Series 10',
      watchSubtitle: 'HF-Expositionsanalyse',
      sarValue: 'SAR-Wert:',
      safetyMarginLabel: 'Sicherheitsmarge:',
      regulatoryStatus: 'Regulatorischer Status:',
      exceptional: 'Herausragend',
      iphoneTitle: 'iPhone 16/17',
      iphoneSubtitle: 'Biomechanische Belastung',
      peakTorque: 'Spitzendrehmoment (60°):',
      equivalentLoad: 'Äquivalente Last:',
      structuralStatus: 'Struktureller Status:',
      exceedsTolerance: 'Überschreitet Toleranz',
      bandsTitle: 'Premium-Armbänder',
      bandsSubtitle: 'Chemischer Transfer',
      maxPfhxa: 'Max. PFHxA:',
      absorptionRisk: 'Absorptionsrisiko:',
      sweatEnhanced: 'Schweißverstärkt',
      exposureStatus: 'Expositionsstatus:',
      critical: 'Kritisch',
      paradoxTitle: 'Premium-Positionierungs-Paradoxon',
      paradoxDesc: 'Höhere Ausgaben korrelieren mit erhöhtem Risiko über beide Gerätekategorien: Premium-Smartphones zeigen engere SAR-Margen, während Premium-Armbänder höhere PFAS-Konzentrationen enthalten.',
      riskPurchasing: 'Risikoinformierter Einkauf',
      riskPurchasingDesc: 'Preis ≠ Sicherheit; explizite Bewertung erforderlich',
      concentratedTitle: 'Konzentrierte Risikoexposition',
      concentratedDesc: 'Sowohl die smartphone-induzierte Halswirbelsäulenbelastung als auch die PFAS-Exposition durch Premium-Armbänder konzentrieren das Risiko an einzelnen anatomischen Stellen statt es systemisch zu verteilen.',
      anatomicalConsideration: 'Anatomische Überlegung',
      anatomicalConsiderationDesc: 'C0–C1 Gelenk und dermale Handgelenkexposition',
      strategyTitle: 'Verbraucher-Risikominderungsstrategie',
      commTitle: 'Kommunikationshierarchie',
      commItems: [
        'Apple Watch für Benachrichtigungen bevorzugen',
        'iPhone für displayintensive Aufgaben reservieren',
        'Freisprecheinrichtung für längere Anrufe nutzen',
        'Zeit mit Telefon in der Tasche minimieren',
      ],
      postureTitle: 'Haltungshygiene',
      postureItems: [
        'Geräte auf Augenhöhe anheben',
        '2-Minuten-Pausen alle 20 Minuten',
        'Zervikale Stabilisatoren stärken',
        'Neutrale Kopfposition beibehalten',
      ],
      materialTitle: 'Materialauswahl',
      materialItems: [
        'Silikonzusammensetzung prüfen',
        'Fluorelastomer-Materialien vermeiden',
        'Armbänder beim Sport entfernen',
        'Budget-Optionen ohne Fluor bevorzugen',
      ],
      finalTitle: 'Risikobewusste Technologieintegration',
      finalDesc: 'Die Konvergenz von Wireless-Kapazitätserweiterung, immersiver Gerätenutzung und chemischer Exposition durch „Performance"-Materialien schafft zusammengesetzte Risikoszenarien, die eine systemische Expositionsreduzierung durch Verhaltensänderung, Materialsubstitution und regulatorische Weiterentwicklung erfordern.',
      watchMarginDesc: 'Die Sicherheitsmarge der Apple Watch demonstriert herausragende Ingenieurskunst',
      flexionDesc: 'Beugungsschwelle für schwere biomechanische Belastung',
      pfhxaDesc: 'PPb PFHxA in Premium-Armbändern erfordert sofortige Aufmerksamkeit',
    },
    refs: {
      title: 'Referenzen',
    },
  },
};
