export const assess = {
  title: 'PDPA Readiness Assessment',
  subtitle: 'Answer these questions to understand your current compliance posture. Results are stored locally and never sent to any server.',
  instructions: 'Select the option that best describes your organization.',
  questions: [
    {
      id: 'q1',
      category: 'Data Inventory',
      question: 'Do you maintain a record of what personal data you collect and why?',
      options: [
        { value: 0, label: 'No record exists' },
        { value: 1, label: 'Partial or outdated record' },
        { value: 2, label: 'Complete and regularly updated' },
      ],
    },
    {
      id: 'q2',
      category: 'Data Inventory',
      question: 'Have you identified where personal data is stored (databases, files, third-party services)?',
      options: [
        { value: 0, label: 'Not mapped' },
        { value: 1, label: 'Partially mapped' },
        { value: 2, label: 'Fully mapped and documented' },
      ],
    },
    {
      id: 'q3',
      category: 'Legal Basis',
      question: 'Do you have a documented lawful basis for each type of data processing?',
      options: [
        { value: 0, label: 'No documentation' },
        { value: 1, label: 'Some processing has documented basis' },
        { value: 2, label: 'All processing has documented lawful basis' },
      ],
    },
    {
      id: 'q4',
      category: 'Consent',
      question: 'When consent is required, do you obtain it before collecting data?',
      options: [
        { value: 0, label: 'No consent mechanism' },
        { value: 1, label: 'Consent collected but not always before processing' },
        { value: 2, label: 'Consent always obtained before collection' },
      ],
    },
    {
      id: 'q5',
      category: 'Privacy Notice',
      question: 'Do you have a privacy notice that explains data collection to data subjects?',
      options: [
        { value: 0, label: 'No privacy notice' },
        { value: 1, label: 'Basic privacy notice exists' },
        { value: 2, label: 'Comprehensive notice covering all PDPA requirements' },
      ],
    },
    {
      id: 'q6',
      category: 'Data Subject Rights',
      question: 'Can data subjects request access to their personal data?',
      options: [
        { value: 0, label: 'No process exists' },
        { value: 1, label: 'Ad-hoc handling of requests' },
        { value: 2, label: 'Documented process with response timeline' },
      ],
    },
    {
      id: 'q7',
      category: 'Data Subject Rights',
      question: 'Can data subjects request deletion or correction of their data?',
      options: [
        { value: 0, label: 'No process exists' },
        { value: 1, label: 'Possible but no formal process' },
        { value: 2, label: 'Clear process documented and communicated' },
      ],
    },
    {
      id: 'q8',
      category: 'Security',
      question: 'Do you have appropriate security measures for personal data?',
      options: [
        { value: 0, label: 'No specific measures' },
        { value: 1, label: 'Basic measures (passwords, backups)' },
        { value: 2, label: 'Comprehensive security including encryption, access controls, monitoring' },
      ],
    },
    {
      id: 'q9',
      category: 'Third Parties',
      question: 'Do you have data processing agreements with vendors who handle personal data?',
      options: [
        { value: 0, label: 'No agreements in place' },
        { value: 1, label: 'Some vendors have agreements' },
        { value: 2, label: 'All vendors have PDPA-compliant agreements' },
      ],
    },
    {
      id: 'q10',
      category: 'Breach Response',
      question: 'Do you have a data breach notification procedure?',
      options: [
        { value: 0, label: 'No procedure' },
        { value: 1, label: 'Informal understanding but not documented' },
        { value: 2, label: 'Documented procedure with 72-hour notification protocol' },
      ],
    },
    {
      id: 'q11',
      category: 'Retention',
      question: 'Do you have defined retention periods for personal data?',
      options: [
        { value: 0, label: 'Data kept indefinitely' },
        { value: 1, label: 'Some data types have retention periods' },
        { value: 2, label: 'All data types have documented retention and deletion schedules' },
      ],
    },
    {
      id: 'q12',
      category: 'Training',
      question: 'Are staff trained on PDPA obligations and data handling?',
      options: [
        { value: 0, label: 'No training provided' },
        { value: 1, label: 'Basic awareness but no formal training' },
        { value: 2, label: 'Regular training with documented records' },
      ],
    },
  ],
  results: {
    title: 'Your Assessment Results',
    score: 'Score',
    outOf: 'out of',
    levels: {
      low: {
        range: '0-8',
        title: 'Early Stage',
        description: 'Significant work needed to achieve PDPA compliance. Start with the basics: inventory your data and create a privacy notice.',
        recommendations: [
          'Begin with data inventory (what data, where stored, why collected)',
          'Draft a basic privacy notice',
          'Identify your data processing activities',
        ],
      },
      medium: {
        range: '9-16',
        title: 'In Progress',
        description: 'Foundation in place but gaps remain. Focus on formalizing processes and documentation.',
        recommendations: [
          'Document lawful basis for all processing',
          'Create data subject request handling procedures',
          'Review third-party vendor agreements',
        ],
      },
      high: {
        range: '17-24',
        title: 'Well Prepared',
        description: 'Strong compliance posture. Focus on maintenance, monitoring, and continuous improvement.',
        recommendations: [
          'Schedule regular compliance reviews',
          'Test your breach notification process',
          'Keep staff training up to date',
        ],
      },
    },
    nextSteps: 'Recommended next steps',
    viewChecklist: 'View the full checklist',
    downloadReport: 'Save results',
  },
};