export interface Service {
  id: string;
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  quickViewDescription: string;
  cardDescription: string;
  detailedDescription: string;
  keyFeatures: string[];
  benefits: string[];
  process: {
    step: string;
    description: string;
  }[];
  deliverables: string[];
  suitableFor: string[];
  image: string;
}

export const servicesData: Service[] = [
  {
    id: '1',
    slug: 'structural-design-drafting',
    icon: 'design',
    title: 'Structural Design & Drafting',
    shortDescription: 'Complete structural solutions from concept to construction',
    quickViewDescription: 'We provide comprehensive structural design services for all types of buildings in Dubai and across the UAE. Our team delivers complete design packages including calculations, drawings, and specifications that meet Dubai Municipality and local authority requirements.',
    cardDescription: 'Expert structural design services for residential, commercial, and industrial projects. We deliver complete design packages including detailed calculations, working drawings, bar bending schedules, and shop drawings that comply with all UAE building codes and regulations.',
    detailedDescription: 'Our structural design and drafting services combine engineering excellence with practical construction knowledge. We specialize in designing safe, cost-effective structures for the UAE\'s demanding climate and soil conditions. From villas to high-rise towers, our experienced team handles projects of all scales with precision and efficiency.',
    keyFeatures: [
      'Reinforced Concrete (RC) Design',
      'Steel Structure Design',
      'Foundation Design & Analysis',
      'Detailed Working Drawings',
      'Bar Bending Schedules (BBS)',
      'Shop Drawings & Fabrication Details',
      'Construction Methodology Support',
      'Value Engineering Solutions',
    ],
    benefits: [
      'Dubai Municipality approved designs',
      'Optimized material usage for cost savings',
      'Fast turnaround times',
      'Compliance with UAE building codes',
      'Coordination with MEP and architectural teams',
      'Experienced in local soil conditions',
    ],
    process: [
      {
        step: 'Project Brief & Site Assessment',
        description: 'Understanding project requirements, site conditions, and client objectives',
      },
      {
        step: 'Preliminary Design',
        description: 'Initial structural concept and layout with load analysis',
      },
      {
        step: 'Detailed Design & Calculations',
        description: 'Comprehensive structural analysis and design calculations',
      },
      {
        step: 'Drawing Preparation',
        description: 'Working drawings, BBS, and construction details',
      },
      {
        step: 'Authority Submission',
        description: 'Preparation and submission to Dubai Municipality or relevant authorities',
      },
      {
        step: 'Construction Support',
        description: 'Site visits, RFI responses, and technical assistance',
      },
    ],
    deliverables: [
      'Structural Design Basis Report',
      'Load Analysis Calculations',
      'Foundation Design Drawings',
      'Structural Framing Plans',
      'Column & Beam Details',
      'Slab Reinforcement Drawings',
      'Bar Bending Schedules',
      'Technical Specifications',
    ],
    suitableFor: [
      'Residential Villas & Buildings',
      'Commercial Complexes',
      'High-Rise Towers',
      'Industrial Facilities',
      'Retail & Shopping Centers',
      'Educational Institutions',
      'Healthcare Facilities',
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop',
  },
  {
    id: '2',
    slug: 'structural-analysis',
    icon: 'analysis',
    title: 'Structural Analysis',
    shortDescription: 'Advanced analysis using latest software and methodologies',
    quickViewDescription: 'Our structural analysis services utilize industry-leading software like ETABS, SAP2000, and SAFE to ensure your building can withstand all loads safely. We analyze static, dynamic, wind, and seismic forces as per UAE building codes.',
    cardDescription: 'Comprehensive structural analysis services using advanced software tools. We perform static, dynamic, wind, seismic, and foundation analysis to ensure structural integrity and safety. Our analysis complies with international codes and UAE-specific requirements.',
    detailedDescription: 'We provide thorough structural analysis services that form the foundation of safe, efficient building design. Using cutting-edge software and proven methodologies, we analyze all load conditions including gravity, wind, seismic, and temperature effects. Our analysis ensures optimal structural performance while maintaining safety and cost-effectiveness.',
    keyFeatures: [
      'Linear & Non-Linear Analysis',
      'Static & Dynamic Analysis',
      'Wind Load Analysis (UAE Wind Zones)',
      'Seismic Analysis',
      'Foundation Settlement Analysis',
      'Progressive Collapse Analysis',
      'Finite Element Analysis (FEA)',
      'Performance-Based Design',
    ],
    benefits: [
      'Accurate load path determination',
      'Optimized member sizing',
      'Enhanced structural safety',
      'Code-compliant designs',
      'Risk mitigation',
      'Cost-effective solutions',
    ],
    process: [
      {
        step: 'Load Definition',
        description: 'Defining all load cases including dead, live, wind, and seismic loads',
      },
      {
        step: 'Model Creation',
        description: 'Building detailed 3D structural model in analysis software',
      },
      {
        step: 'Analysis Execution',
        description: 'Running comprehensive structural analysis for all load combinations',
      },
      {
        step: 'Results Evaluation',
        description: 'Reviewing stress, deflection, and stability results',
      },
      {
        step: 'Design Optimization',
        description: 'Refining structural system for optimal performance',
      },
      {
        step: 'Report Generation',
        description: 'Detailed analysis report with findings and recommendations',
      },
    ],
    deliverables: [
      'Structural Analysis Report',
      'Load Calculation Sheets',
      'Analysis Model Files',
      'Deflection Analysis',
      'Stress Distribution Diagrams',
      'Foundation Analysis Results',
      'Design Recommendations',
      'Code Compliance Verification',
    ],
    suitableFor: [
      'Complex Structural Systems',
      'High-Rise Buildings',
      'Long-Span Structures',
      'Seismic-Sensitive Projects',
      'Retrofit & Renovation Projects',
      'Special Structures (Stadiums, Bridges)',
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop',
  },
  {
    id: '3',
    slug: 'calculations-reports',
    icon: 'document',
    title: 'Calculations & Reports',
    shortDescription: 'Detailed engineering documentation and compliance reports',
    quickViewDescription: 'We prepare comprehensive structural calculations and technical reports that meet Dubai Municipality requirements. All calculations are stamped by our licensed engineers and comply with international standards including BS, ACI, and Eurocode.',
    cardDescription: 'Professional structural calculation packages and engineering reports prepared to international standards. Our calculations cover all structural elements from foundations to roof, with detailed load analysis, material specifications, and code compliance verification.',
    detailedDescription: 'Our calculation and reporting services provide the detailed engineering documentation required for authority approvals and construction. We prepare clear, comprehensive calculations that demonstrate structural adequacy and code compliance. All work is reviewed and stamped by our licensed professional engineers.',
    keyFeatures: [
      'Foundation Design Calculations',
      'Column & Beam Design',
      'Slab Design Calculations',
      'Shear Wall & Core Design',
      'Staircase & Ramp Calculations',
      'Retaining Wall Design',
      'Load Analysis Reports',
      'Material Specifications',
    ],
    benefits: [
      'Authority-approved format',
      'Clear and organized documentation',
      'Professional engineer stamp',
      'Quick authority approvals',
      'Comprehensive code references',
      'Easy for contractors to understand',
    ],
    process: [
      {
        step: 'Data Collection',
        description: 'Gathering architectural drawings, soil reports, and project requirements',
      },
      {
        step: 'Code Selection',
        description: 'Identifying applicable codes and standards for the project',
      },
      {
        step: 'Load Calculations',
        description: 'Calculating all dead, live, wind, and seismic loads',
      },
      {
        step: 'Member Design',
        description: 'Designing all structural members with detailed calculations',
      },
      {
        step: 'Documentation',
        description: 'Preparing formatted calculation sheets and reports',
      },
      {
        step: 'Review & Approval',
        description: 'Internal review and professional engineer approval',
      },
    ],
    deliverables: [
      'Design Basis Report',
      'Load Calculation Sheets',
      'Foundation Design Calculations',
      'Column Design Calculations',
      'Beam Design Calculations',
      'Slab Design Calculations',
      'Material Specifications',
      'Code Compliance Summary',
    ],
    suitableFor: [
      'Dubai Municipality Submissions',
      'Master Developer Approvals',
      'Civil Defense Requirements',
      'Bank/Financing Documentation',
      'Contractor Tender Packages',
      'Construction Documentation',
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop',
  },
  {
    id: '4',
    slug: 'authority-approvals',
    icon: 'approval',
    title: 'Authority Approvals',
    shortDescription: 'Streamlined approval process with Dubai Municipality',
    quickViewDescription: 'We handle all structural approval processes with Dubai Municipality, Civil Defense, and master developers. Our team has extensive experience navigating UAE regulatory requirements and ensures smooth, timely approvals for your project.',
    cardDescription: 'Complete authority approval services for structural drawings and calculations. We manage submissions to Dubai Municipality, DEWA, Civil Defense, and master developers. Our established relationships and expertise ensure efficient approval processes.',
    detailedDescription: 'Navigating Dubai\'s regulatory approval process requires expertise and experience. Our team manages the entire approval journey from initial submission to final permit issuance. We coordinate with all relevant authorities, respond to technical queries, and ensure your project meets all regulatory requirements.',
    keyFeatures: [
      'Dubai Municipality Approvals',
      'Civil Defense NOC',
      'DEWA Coordination',
      'Master Developer Approvals (Emaar, Nakheel, etc.)',
      'Building Permit Processing',
      'Regulatory Compliance Review',
      'Technical Query Responses',
      'Amendment & Revision Submissions',
    ],
    benefits: [
      'Faster approval timelines',
      'Reduced rejection risks',
      'Expert handling of queries',
      'Single point of contact',
      'Updated on regulatory changes',
      'Established authority relationships',
    ],
    process: [
      {
        step: 'Document Preparation',
        description: 'Preparing all required drawings, calculations, and supporting documents',
      },
      {
        step: 'Pre-Submission Review',
        description: 'Internal compliance check against authority requirements',
      },
      {
        step: 'Initial Submission',
        description: 'Submitting complete package to relevant authorities',
      },
      {
        step: 'Query Management',
        description: 'Responding to technical queries and clarifications',
      },
      {
        step: 'Revision & Resubmission',
        description: 'Incorporating authority comments and resubmitting',
      },
      {
        step: 'Final Approval',
        description: 'Obtaining approved stamps and building permits',
      },
    ],
    deliverables: [
      'Approved Structural Drawings',
      'Approved Calculations',
      'Building Permit',
      'NOC Certificates',
      'Authority Approval Letters',
      'Compliance Certificates',
      'Submission Timeline Reports',
    ],
    suitableFor: [
      'New Construction Projects',
      'Renovation & Addition Works',
      'Change of Use Applications',
      'Structural Modifications',
      'Permit Renewals',
      'Fast-Track Projects',
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop',
  },
  {
    id: '5',
    slug: '3d-bim-modeling',
    icon: 'model',
    title: '3D BIM Modeling',
    shortDescription: 'Advanced Building Information Modeling services',
    quickViewDescription: 'Our BIM services provide detailed 3D structural models that enhance coordination, reduce errors, and streamline construction. We use Revit and Tekla to create intelligent models with embedded structural data and clash detection.',
    cardDescription: 'Professional BIM modeling services for structural systems using Autodesk Revit and Tekla Structures. Our 3D models facilitate better coordination, accurate quantity takeoffs, clash detection, and visualization throughout the project lifecycle.',
    detailedDescription: 'Building Information Modeling has revolutionized structural engineering. Our BIM services create intelligent 3D models that serve as a single source of truth for your project. From design through construction and facility management, our BIM models enhance collaboration, reduce conflicts, and improve project outcomes.',
    keyFeatures: [
      'Detailed 3D Structural Models',
      'Parametric Design Elements',
      'Clash Detection & Resolution',
      'Quantity Takeoffs & Estimating',
      'Construction Sequencing',
      'Shop Drawing Generation',
      'As-Built Documentation',
      'Facility Management Integration',
    ],
    benefits: [
      'Improved coordination with MEP and architecture',
      'Reduced construction errors',
      'Accurate material quantities',
      'Better visualization for stakeholders',
      'Faster design iterations',
      'Enhanced construction planning',
    ],
    process: [
      {
        step: 'Model Setup',
        description: 'Establishing BIM standards, templates, and coordination protocols',
      },
      {
        step: '3D Modeling',
        description: 'Creating detailed structural model with all elements',
      },
      {
        step: 'Coordination',
        description: 'Multi-discipline clash detection and resolution',
      },
      {
        step: 'Documentation',
        description: 'Generating construction drawings from the model',
      },
      {
        step: 'Quantity Extraction',
        description: 'Producing accurate material takeoffs and schedules',
      },
      {
        step: 'Model Delivery',
        description: 'Providing native files and IFC exports for collaboration',
      },
    ],
    deliverables: [
      'Revit/Tekla Structural Model',
      'IFC Files for Coordination',
      'Clash Detection Reports',
      'Quantity Takeoff Reports',
      '3D Visualizations',
      'Construction Drawings from Model',
      'As-Built Model Updates',
      'BIM Execution Plan',
    ],
    suitableFor: [
      'Large-Scale Projects',
      'Complex Geometries',
      'Design-Build Projects',
      'Fast-Track Construction',
      'Projects Requiring Coordination',
      'Facility Management Handover',
    ],
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&auto=format&fit=crop',
  },
  {
    id: '6',
    slug: 'site-supervision',
    icon: 'supervision',
    title: 'Site Supervision',
    shortDescription: 'Expert on-site supervision and quality control',
    quickViewDescription: 'Our structural engineers provide on-site supervision to ensure construction aligns with approved designs. We conduct quality inspections, review material tests, and provide technical solutions to construction challenges.',
    cardDescription: 'Professional site supervision services ensuring structural integrity during construction. Our engineers monitor concrete pours, reinforcement placement, formwork installation, and conduct regular quality inspections to maintain design compliance.',
    detailedDescription: 'Quality construction requires expert supervision. Our experienced structural engineers work on-site to ensure workmanship meets design standards and specifications. We identify and resolve issues early, coordinate with contractors, and maintain detailed site records for smooth project execution.',
    keyFeatures: [
      'Quality Control Inspections',
      'Reinforcement Verification',
      'Concrete Pour Supervision',
      'Formwork Inspection',
      'Material Testing Coordination',
      'Technical Problem Solving',
      'Progress Monitoring',
      'Defect Identification & Resolution',
    ],
    benefits: [
      'Ensures design compliance',
      'Early issue detection',
      'Reduced rework costs',
      'Quality assurance',
      'Technical support for contractors',
      'Detailed site documentation',
    ],
    process: [
      {
        step: 'Kick-off Meeting',
        description: 'Reviewing drawings, specifications, and quality requirements with contractor',
      },
      {
        step: 'Regular Inspections',
        description: 'Scheduled site visits for key construction stages',
      },
      {
        step: 'Quality Checks',
        description: 'Verification of materials, reinforcement, and workmanship',
      },
      {
        step: 'Testing Coordination',
        description: 'Witnessing concrete tests, soil tests, and load tests',
      },
      {
        step: 'Issue Resolution',
        description: 'Providing technical solutions to site challenges',
      },
      {
        step: 'Progress Reporting',
        description: 'Regular reports with photos and recommendations',
      },
    ],
    deliverables: [
      'Inspection Reports',
      'Site Photographs',
      'Test Result Reviews',
      'Non-Conformance Reports',
      'Technical Site Instructions',
      'Progress Updates',
      'Completion Certificates',
      'Handover Documentation',
    ],
    suitableFor: [
      'New Construction Projects',
      'Critical Structural Elements',
      'Complex Structural Systems',
      'High-Quality Developments',
      'Foundation Works',
      'Concrete Frame Construction',
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&auto=format&fit=crop',
  },
];

export const comprehensiveServices = [
  {
    category: 'Design Services',
    items: [
      'New Building Structural Design',
      'Renovation & Retrofit Design',
      'Addition & Extension Design',
      'Structural Strengthening Solutions',
      'Value Engineering',
      'Design-Build Support',
    ],
  },
  {
    category: 'Analysis Services',
    items: [
      'Structural Health Assessment',
      'Load Path Analysis',
      'Progressive Collapse Analysis',
      'Vibration Analysis',
      'Blast & Impact Analysis',
      'Connection Design',
    ],
  },
  {
    category: 'Documentation Services',
    items: [
      'Architectural to Structural Coordination',
      'Construction Documentation',
      'Specification Writing',
      'Material Submittals Review',
      'RFI Response',
      'Change Order Documentation',
    ],
  },
  {
    category: 'Specialized Services',
    items: [
      'Post-Tensioned Slab Design',
      'Precast Concrete Design',
      'Composite Structure Design',
      'Retaining Wall Design',
      'Swimming Pool Structural Design',
      'Façade Structural Support',
    ],
  },
];
