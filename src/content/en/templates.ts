export const templates = {
  title: 'Templates & Documents',
  subtitle: 'Ready-to-use templates you can adapt for your organization. All templates are in plain Markdown format for easy editing.',
  categories: [
    {
      id: 'notices',
      title: 'Privacy Notices',
      templates: [
        {
          id: 'privacy-notice',
          title: 'Privacy Notice Template',
          description: 'Comprehensive privacy notice covering all PDPA required disclosures.',
          format: 'Markdown',
          filename: 'privacy-notice.md',
        },
        {
          id: 'cookie-notice',
          title: 'Cookie Notice Template',
          description: 'Notice for website cookie usage and tracking technologies.',
          format: 'Markdown',
          filename: 'cookie-notice.md',
        },
        {
          id: 'employee-notice',
          title: 'Employee Privacy Notice',
          description: 'Privacy notice specifically for employee personal data.',
          format: 'Markdown',
          filename: 'employee-privacy-notice.md',
        },
      ],
    },
    {
      id: 'requests',
      title: 'Data Subject Requests',
      templates: [
        {
          id: 'dsr-form',
          title: 'Data Subject Request Form',
          description: 'Form for individuals to submit access, correction, or deletion requests.',
          format: 'Markdown',
          filename: 'dsr-request-form.md',
        },
        {
          id: 'dsr-response',
          title: 'DSR Response Template',
          description: 'Template for responding to data subject requests.',
          format: 'Markdown',
          filename: 'dsr-response-template.md',
        },
      ],
    },
    {
      id: 'agreements',
      title: 'Agreements & Contracts',
      templates: [
        {
          id: 'dpa',
          title: 'Data Processing Agreement',
          description: 'Agreement for vendors/processors who handle personal data on your behalf.',
          format: 'Markdown',
          filename: 'data-processing-agreement.md',
        },
        {
          id: 'consent-form',
          title: 'Consent Form Template',
          description: 'Template for collecting consent for specific processing activities.',
          format: 'Markdown',
          filename: 'consent-form.md',
        },
      ],
    },
    {
      id: 'internal',
      title: 'Internal Documents',
      templates: [
        {
          id: 'data-inventory',
          title: 'Data Inventory Template',
          description: 'Spreadsheet template for documenting personal data inventory.',
          format: 'Markdown',
          filename: 'data-inventory.md',
        },
        {
          id: 'breach-procedure',
          title: 'Breach Response Procedure',
          description: 'Step-by-step procedure for handling data breaches.',
          format: 'Markdown',
          filename: 'breach-procedure.md',
        },
        {
          id: 'retention-schedule',
          title: 'Retention Schedule Template',
          description: 'Template for documenting data retention periods.',
          format: 'Markdown',
          filename: 'retention-schedule.md',
        },
      ],
    },
  ],
  actions: {
    preview: 'Preview',
    download: 'Download',
    copyContent: 'Copy content',
  },
  disclaimer: 'These templates are starting points only. Customize them for your specific circumstances and have them reviewed by qualified legal counsel before use.',
};

export const templateContents: Record<string, string> = {
  'privacy-notice': `# Privacy Notice

**[Organization Name]**  
**Last Updated: [Date]**

## 1. Introduction

[Organization Name] ("we," "us," or "our") is committed to protecting your personal data in accordance with the Personal Data Protection Act B.E. 2562 (2019) ("PDPA").

This Privacy Notice explains how we collect, use, disclose, and protect your personal data.

## 2. Data Controller

**Data Controller:** [Organization Name]  
**Address:** [Address]  
**Contact:** [Email/Phone]  
**Data Protection Officer:** [Name/Contact] (if applicable)

## 3. Personal Data We Collect

We may collect the following categories of personal data:

### 3.1 Identity Data
- Full name
- Date of birth
- National ID number
- Passport number

### 3.2 Contact Data
- Address
- Email address
- Phone number

### 3.3 Transaction Data
- Purchase history
- Payment records
- Service usage history

### 3.4 Technical Data
- IP address
- Device information
- Browser type
- Cookies and similar technologies

### 3.5 Sensitive Personal Data (if applicable)
- [Specify if collecting health, biometric, religious, or other sensitive data]

## 4. Purposes of Processing

We process your personal data for the following purposes:

| Purpose | Legal Basis |
|---------|-------------|
| To provide products/services you request | Contract performance |
| To process payments | Contract performance |
| To communicate with you | Legitimate interests |
| To comply with legal obligations | Legal obligation |
| To send marketing communications | Consent |
| [Add other purposes] | [Legal basis] |

## 5. Data Sharing

We may share your personal data with:

- **Service providers:** [Types of processors]
- **Business partners:** [If applicable]
- **Government authorities:** When required by law
- **Other parties:** With your consent

## 6. International Transfers

[If applicable: We may transfer your personal data to countries outside Thailand. When we do so, we ensure adequate protection through...]

## 7. Data Retention

We retain personal data only as long as necessary for the purposes collected:

| Data Category | Retention Period |
|---------------|-----------------|
| [Category] | [Period] |

## 8. Your Rights

Under PDPA, you have the right to:

- **Access** your personal data
- **Correct** inaccurate data
- **Delete** your data (in certain circumstances)
- **Restrict** processing
- **Object** to processing
- **Data portability** (receive your data in machine-readable format)
- **Withdraw consent** at any time

To exercise these rights, contact us at [Contact Details].

## 9. Data Security

We implement appropriate technical and organizational measures to protect your personal data, including:

- [Security measures]

## 10. Changes to This Notice

We may update this Privacy Notice periodically. We will notify you of material changes by [notification method].

## 11. Contact Us

For questions about this Privacy Notice or our data practices:

**[Organization Name]**  
[Contact Details]
`,

  'dsr-request-form': `# Data Subject Request Form

**[Organization Name]**

Use this form to submit a request regarding your personal data under the Personal Data Protection Act (PDPA).

---

## Section 1: Your Information

**Full Name:** ____________________

**Email Address:** ____________________

**Phone Number:** ____________________

**Address:** ____________________

**National ID / Passport Number (for verification):** ____________________

---

## Section 2: Type of Request

Please select the type(s) of request you are making:

- [ ] **Access Request** - I want to know what personal data you hold about me
- [ ] **Correction Request** - I want to correct inaccurate personal data
- [ ] **Deletion Request** - I want you to delete my personal data
- [ ] **Restriction Request** - I want you to restrict processing of my data
- [ ] **Objection** - I object to processing of my data
- [ ] **Data Portability** - I want a copy of my data in machine-readable format
- [ ] **Consent Withdrawal** - I want to withdraw my consent

---

## Section 3: Request Details

Please provide additional details about your request:

____________________
____________________
____________________
____________________

---

## Section 4: Verification

To protect your personal data, we need to verify your identity before processing your request.

Please attach a copy of your ID document (with sensitive information redacted).

---

## Section 5: Declaration

I declare that:
- The information provided above is true and accurate
- I am the data subject or authorized representative

**Signature:** ____________________

**Date:** ____________________

---

## How to Submit

- **Email:** [email]
- **Mail:** [address]
- **In Person:** [location]

**Response Timeline:** We will respond to your request within 30 days.

---

*For internal use only:*
- Request ID: ____
- Date Received: ____
- Assigned To: ____
- Due Date: ____
`,

  'data-processing-agreement': `# Data Processing Agreement

**Between:**

**Data Controller:** [Controller Name] ("Controller")  
**Address:** [Address]  
**Registration Number:** [Number]

**And:**

**Data Processor:** [Processor Name] ("Processor")  
**Address:** [Address]  
**Registration Number:** [Number]

**Effective Date:** [Date]

---

## 1. Background

1.1 The Controller and Processor have entered into a service agreement dated [Date] ("Principal Agreement") under which the Processor provides [describe services] to the Controller.

1.2 In providing the services, the Processor will process personal data on behalf of the Controller.

1.3 This Data Processing Agreement ("DPA") sets out the terms governing the Processor's processing of personal data under the Principal Agreement in compliance with the Personal Data Protection Act B.E. 2562 (2019) ("PDPA").

## 2. Definitions

2.1 "Personal Data" means any information relating to an identified or identifiable natural person.

2.2 "Processing" means any operation performed on personal data.

2.3 "Data Subject" means the individual to whom personal data relates.

## 3. Scope of Processing

3.1 **Subject Matter:** [Description of processing]

3.2 **Duration:** Processing will continue for the duration of the Principal Agreement.

3.3 **Nature and Purpose:** [Describe nature and purpose]

3.4 **Types of Personal Data:**
- [List types]

3.5 **Categories of Data Subjects:**
- [List categories]

## 4. Processor Obligations

The Processor shall:

4.1 Process personal data only on documented instructions from the Controller.

4.2 Ensure that persons authorized to process personal data are bound by confidentiality obligations.

4.3 Implement appropriate technical and organizational security measures, including:
- [List specific measures]

4.4 Not engage sub-processors without prior written authorization from the Controller.

4.5 Assist the Controller in:
- Responding to data subject requests
- Ensuring compliance with security obligations
- Conducting data protection impact assessments
- Notifying data breaches

4.6 Delete or return all personal data upon termination of the Principal Agreement.

4.7 Make available to the Controller all information necessary to demonstrate compliance.

## 5. Sub-processors

5.1 The Controller authorizes the use of the following sub-processors:

| Sub-processor | Location | Processing Activity |
|---------------|----------|-------------------|
| [Name] | [Country] | [Activity] |

5.2 The Processor shall impose equivalent data protection obligations on sub-processors.

## 6. Data Transfers

6.1 The Processor shall not transfer personal data outside Thailand without the Controller's prior written consent and appropriate safeguards.

## 7. Security Measures

The Processor shall implement and maintain:

7.1 Access controls and authentication
7.2 Encryption of data at rest and in transit
7.3 Regular security testing
7.4 Incident response procedures
7.5 Business continuity measures

## 8. Breach Notification

8.1 The Processor shall notify the Controller without undue delay (and within 24 hours) upon becoming aware of a personal data breach.

8.2 Notification shall include:
- Nature of the breach
- Categories and approximate number of data subjects affected
- Likely consequences
- Measures taken or proposed

## 9. Audit Rights

9.1 The Controller may audit the Processor's compliance with this DPA with reasonable notice.

## 10. Liability

10.1 The Processor shall indemnify the Controller against losses arising from the Processor's breach of this DPA.

## 11. Term and Termination

11.1 This DPA shall remain in effect for the duration of the Principal Agreement.

11.2 Upon termination, the Processor shall delete all personal data within [30] days unless retention is required by law.

---

**Signatures:**

**For Controller:**  
Name: ____________________  
Title: ____________________  
Date: ____________________  
Signature: ____________________

**For Processor:**  
Name: ____________________  
Title: ____________________  
Date: ____________________  
Signature: ____________________
`,

  'breach-procedure': `# Data Breach Response Procedure

**[Organization Name]**  
**Version:** 1.0  
**Last Updated:** [Date]  
**Owner:** [DPO/Security Officer]

---

## 1. Purpose

This procedure establishes the steps for identifying, responding to, and recovering from personal data breaches in compliance with the PDPA.

## 2. Scope

This procedure applies to all employees, contractors, and third parties who become aware of a suspected or actual data breach involving personal data.

## 3. Definitions

**Personal Data Breach:** A breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to personal data.

## 4. Breach Response Team

| Role | Name | Contact |
|------|------|---------|
| Incident Lead | [Name] | [Contact] |
| DPO/Privacy Officer | [Name] | [Contact] |
| IT Security | [Name] | [Contact] |
| Legal | [Name] | [Contact] |
| Communications | [Name] | [Contact] |

## 5. Procedure

### Phase 1: Detection & Reporting (0-4 hours)

**Step 1: Initial Report**
- Any person discovering a potential breach must immediately report to [Contact/Email]
- Use the Breach Incident Report Form (Appendix A)

**Step 2: Activate Response Team**
- Incident Lead assembles the Breach Response Team
- Initial assessment meeting within 2 hours

### Phase 2: Containment (4-24 hours)

**Step 3: Contain the Breach**
- [ ] Isolate affected systems
- [ ] Revoke compromised credentials
- [ ] Block unauthorized access
- [ ] Preserve evidence

**Step 4: Assess Scope**
- [ ] What data was affected?
- [ ] How many individuals?
- [ ] What categories of data?
- [ ] How did the breach occur?
- [ ] Is the breach ongoing?

### Phase 3: Assessment & Notification (24-72 hours)

**Step 5: Risk Assessment**

Evaluate the risk to individuals:

| Factor | Low | Medium | High |
|--------|-----|--------|------|
| Data sensitivity | Non-sensitive | Contact info | Financial, health, ID |
| Number affected | <100 | 100-1000 | >1000 |
| Likelihood of harm | Unlikely | Possible | Likely |

**Step 6: Notification Decision**

Notify PDPC if the breach is likely to result in high risk to individuals' rights and freedoms.

**PDPC Notification (within 72 hours):**
- Submit notification to [PDPC contact]
- Include: nature of breach, categories of data, number affected, likely consequences, mitigation measures

**Data Subject Notification:**
- Required if high risk to individuals
- Use clear, plain language
- Describe what happened and what we're doing
- Provide contact for questions

### Phase 4: Recovery (72+ hours)

**Step 7: Remediation**
- [ ] Patch vulnerabilities
- [ ] Enhance security controls
- [ ] Update procedures
- [ ] Retrain staff if needed

**Step 8: Documentation**
- Complete the Breach Register entry
- Document all actions taken
- Prepare lessons learned report

### Phase 5: Review (2-4 weeks)

**Step 9: Post-Incident Review**
- Conduct post-incident meeting
- Identify root cause
- Update controls and procedures
- Report to management

---

## Appendix A: Breach Incident Report Form

**Date/Time Discovered:** ____________________

**Reported By:** ____________________

**Description of Incident:**
____________________

**Systems Affected:**
____________________

**Data Potentially Affected:**
- [ ] Names
- [ ] Contact information
- [ ] Financial data
- [ ] ID numbers
- [ ] Health data
- [ ] Other: ____________________

**Estimated Number of Individuals:** ____________________

**How Was Breach Discovered?**
____________________

**Initial Actions Taken:**
____________________

---

## Appendix B: Breach Register

| ID | Date | Description | Data Types | Individuals | PDPC Notified | Subjects Notified | Status |
|----|------|-------------|------------|-------------|---------------|-------------------|--------|
| | | | | | | | |

---

## 6. Contact Information

**During Business Hours:** [Contact]  
**After Hours Emergency:** [Contact]  
**PDPC Contact:** [PDPC contact details]
`,
};