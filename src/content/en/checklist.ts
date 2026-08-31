export const checklist = {
  title: 'PDPA Compliance Checklist',
  subtitle: 'Track your progress through key compliance requirements. Progress is saved locally in your browser.',
  sections: [
    {
      id: 'governance',
      title: 'Governance & Accountability',
      items: [
        {
          id: 'gov-1',
          title: 'Appoint a Data Protection Officer (DPO) if required',
          description: 'Required for certain organizations processing sensitive data at scale or as a core activity.',
        },
        {
          id: 'gov-2',
          title: 'Define data protection roles and responsibilities',
          description: 'Document who is responsible for compliance activities, breach response, and subject requests.',
        },
        {
          id: 'gov-3',
          title: 'Establish a privacy governance committee or review process',
          description: 'Regular meetings to review compliance status, incidents, and policy updates.',
        },
        {
          id: 'gov-4',
          title: 'Create and maintain a data protection policy',
          description: 'Internal policy document outlining principles, procedures, and expectations.',
        },
      ],
    },
    {
      id: 'inventory',
      title: 'Data Inventory & Mapping',
      items: [
        {
          id: 'inv-1',
          title: 'Identify all personal data collected',
          description: 'Names, contact info, IDs, photos, health data, financial data, etc.',
        },
        {
          id: 'inv-2',
          title: 'Document purpose for each data type',
          description: 'Why is each category of data collected? What business purpose does it serve?',
        },
        {
          id: 'inv-3',
          title: 'Map data storage locations',
          description: 'Databases, file servers, cloud services, spreadsheets, paper files.',
        },
        {
          id: 'inv-4',
          title: 'Identify data flows (internal and external)',
          description: 'How does data move between systems? Which third parties receive data?',
        },
        {
          id: 'inv-5',
          title: 'Classify data by sensitivity',
          description: 'Identify sensitive personal data (health, religion, biometrics, etc.) requiring extra protection.',
        },
      ],
    },
    {
      id: 'legal-basis',
      title: 'Legal Basis & Consent',
      items: [
        {
          id: 'lb-1',
          title: 'Document lawful basis for each processing activity',
          description: 'Consent, contract, legal obligation, vital interests, public task, or legitimate interests.',
        },
        {
          id: 'lb-2',
          title: 'Implement consent collection mechanisms',
          description: 'Clear, specific, freely given consent with opt-in (not pre-checked boxes).',
        },
        {
          id: 'lb-3',
          title: 'Maintain consent records',
          description: 'Who consented, when, to what, and how they consented.',
        },
        {
          id: 'lb-4',
          title: 'Provide easy consent withdrawal',
          description: 'Withdrawal must be as easy as giving consent.',
        },
        {
          id: 'lb-5',
          title: 'Obtain explicit consent for sensitive data',
          description: 'Sensitive personal data requires explicit, informed consent.',
        },
      ],
    },
    {
      id: 'notices',
      title: 'Privacy Notices & Transparency',
      items: [
        {
          id: 'pn-1',
          title: 'Create a comprehensive privacy notice',
          description: 'Covers: data controller identity, purposes, legal basis, recipients, retention, rights.',
        },
        {
          id: 'pn-2',
          title: 'Make privacy notice easily accessible',
          description: 'Website footer, app settings, physical locations where data is collected.',
        },
        {
          id: 'pn-3',
          title: 'Provide notice in Thai (and other languages as needed)',
          description: 'Notice must be in a language data subjects understand.',
        },
        {
          id: 'pn-4',
          title: 'Update notice when practices change',
          description: 'Review and update whenever collection or processing changes.',
        },
        {
          id: 'pn-5',
          title: 'Provide layered notices where appropriate',
          description: 'Short notice at collection point, full notice linked.',
        },
      ],
    },
    {
      id: 'rights',
      title: 'Data Subject Rights',
      items: [
        {
          id: 'dsr-1',
          title: 'Implement access request process',
          description: 'Data subjects can request a copy of their personal data.',
        },
        {
          id: 'dsr-2',
          title: 'Implement correction request process',
          description: 'Data subjects can request correction of inaccurate data.',
        },
        {
          id: 'dsr-3',
          title: 'Implement deletion request process',
          description: 'Data subjects can request erasure when no longer necessary.',
        },
        {
          id: 'dsr-4',
          title: 'Implement data portability process',
          description: 'Provide data in machine-readable format upon request.',
        },
        {
          id: 'dsr-5',
          title: 'Implement objection handling process',
          description: 'Handle objections to processing based on legitimate interests.',
        },
        {
          id: 'dsr-6',
          title: 'Document response timelines and track compliance',
          description: 'Respond within 30 days; document all requests and responses.',
        },
      ],
    },
    {
      id: 'security',
      title: 'Data Security',
      items: [
        {
          id: 'sec-1',
          title: 'Implement access controls',
          description: 'Role-based access, need-to-know principle, regular access reviews.',
        },
        {
          id: 'sec-2',
          title: 'Encrypt data at rest and in transit',
          description: 'TLS for transmission, encryption for stored sensitive data.',
        },
        {
          id: 'sec-3',
          title: 'Implement secure authentication',
          description: 'Strong passwords, MFA where appropriate, session management.',
        },
        {
          id: 'sec-4',
          title: 'Conduct regular security assessments',
          description: 'Vulnerability scans, penetration testing, security audits.',
        },
        {
          id: 'sec-5',
          title: 'Maintain security incident logs',
          description: 'Log and review security events, failed access attempts.',
        },
      ],
    },
    {
      id: 'third-party',
      title: 'Third-Party Management',
      items: [
        {
          id: 'tp-1',
          title: 'Inventory all data processors (vendors)',
          description: 'List all vendors who process personal data on your behalf.',
        },
        {
          id: 'tp-2',
          title: 'Execute Data Processing Agreements (DPAs)',
          description: 'Contracts specifying processor obligations, security, sub-processors.',
        },
        {
          id: 'tp-3',
          title: 'Conduct due diligence on processors',
          description: 'Verify processor security practices and compliance capability.',
        },
        {
          id: 'tp-4',
          title: 'Monitor processor compliance',
          description: 'Regular reviews, audit rights, incident notification requirements.',
        },
      ],
    },
    {
      id: 'retention',
      title: 'Data Retention & Disposal',
      items: [
        {
          id: 'ret-1',
          title: 'Define retention periods for each data category',
          description: 'Based on legal requirements, business need, and data subject expectations.',
        },
        {
          id: 'ret-2',
          title: 'Document retention schedule',
          description: 'Written schedule linking data types to retention periods and justification.',
        },
        {
          id: 'ret-3',
          title: 'Implement deletion/anonymization procedures',
          description: 'Secure deletion or anonymization when retention period expires.',
        },
        {
          id: 'ret-4',
          title: 'Conduct regular retention reviews',
          description: 'Periodic checks to ensure data not kept beyond retention period.',
        },
      ],
    },
    {
      id: 'breach',
      title: 'Breach Response',
      items: [
        {
          id: 'br-1',
          title: 'Create breach response procedure',
          description: 'Steps for detection, containment, assessment, notification, and remediation.',
        },
        {
          id: 'br-2',
          title: 'Define notification timelines and contacts',
          description: 'Notify PDPC within 72 hours if risk to individuals; notify affected individuals.',
        },
        {
          id: 'br-3',
          title: 'Train staff on breach identification',
          description: 'Staff know what constitutes a breach and how to report internally.',
        },
        {
          id: 'br-4',
          title: 'Maintain breach register',
          description: 'Log all breaches, response actions, and outcomes.',
        },
      ],
    },
    {
      id: 'training',
      title: 'Training & Awareness',
      items: [
        {
          id: 'tr-1',
          title: 'Provide initial PDPA training for all staff',
          description: 'Basic awareness training on data protection principles.',
        },
        {
          id: 'tr-2',
          title: 'Provide role-specific training',
          description: 'Additional training for staff handling sensitive data or requests.',
        },
        {
          id: 'tr-3',
          title: 'Conduct refresher training annually',
          description: 'Keep knowledge current and reinforce good practices.',
        },
        {
          id: 'tr-4',
          title: 'Maintain training records',
          description: 'Document who was trained, when, and on what topics.',
        },
      ],
    },
  ],
  exportTitle: 'Export Checklist',
  printView: 'Print View',
  resetProgress: 'Reset Progress',
  resetConfirm: 'Are you sure you want to reset all progress? This cannot be undone.',
};