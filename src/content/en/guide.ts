export const guide = {
  title: 'PDPA Guide',
  subtitle: 'Understanding the Personal Data Protection Act for Thai businesses',
  sections: [
    {
      id: 'overview',
      title: 'Law Overview',
      content: `## What is PDPA?

The Personal Data Protection Act B.E. 2562 (2019), or PDPA, is Thailand's comprehensive data protection law. It came into full effect on June 1, 2022, and applies to organizations that collect, use, or disclose personal data of individuals in Thailand.

### Key Objectives

1. **Protect individuals' privacy** — Give people control over their personal data
2. **Establish standards** — Create clear rules for how organizations handle data
3. **Build trust** — Enable responsible data use that supports business while protecting people

### Who Does It Apply To?

PDPA applies to any organization that:

- Collects, uses, or discloses personal data of individuals in Thailand
- Offers goods or services to people in Thailand
- Monitors behavior of individuals in Thailand

This includes Thai companies, foreign companies with Thai customers, and nonprofit organizations.

### Penalties

Non-compliance can result in:

- **Administrative fines** up to 5 million baht
- **Criminal penalties** including imprisonment up to 1 year and/or fines up to 1 million baht
- **Civil liability** for actual damages plus punitive damages up to 2x actual damages`,
    },
    {
      id: 'roles',
      title: 'Key Roles',
      content: `## Key Roles Under PDPA

Understanding the different roles is essential for knowing your responsibilities.

### Data Subject

The individual whose personal data is being processed. This is the person the data is about — your customers, employees, website visitors, etc.

**Rights:**
- Right to be informed
- Right of access
- Right to rectification
- Right to erasure
- Right to restrict processing
- Right to data portability
- Right to object

### Data Controller

The organization that determines the purposes and means of processing personal data. If you decide what data to collect and why, you're the controller.

**Responsibilities:**
- Determine lawful basis for processing
- Provide privacy notices
- Respond to data subject requests
- Implement appropriate security
- Report breaches to PDPC
- Conduct impact assessments when required

### Data Processor

An organization that processes personal data on behalf of the controller. This is typically a vendor or service provider.

**Responsibilities:**
- Process data only as instructed by controller
- Implement appropriate security measures
- Assist controller with compliance obligations
- Notify controller of breaches
- Delete or return data when processing ends

### Data Protection Officer (DPO)

A designated person responsible for overseeing data protection compliance. Required for certain organizations.

**When Required:**
- Public authorities
- Organizations whose core activities involve large-scale monitoring
- Organizations whose core activities involve large-scale processing of sensitive data

**Responsibilities:**
- Advise on compliance
- Monitor compliance
- Train staff
- Cooperate with PDPC
- Act as contact point`,
    },
    {
      id: 'lawful-basis',
      title: 'Lawful Basis',
      content: `## Lawful Basis for Processing

You need a valid legal reason (lawful basis) for every processing activity. PDPA provides several options:

### 1. Consent

The data subject has given clear consent for you to process their personal data for specific purposes.

**Requirements:**
- Must be freely given, specific, informed
- Must be obtained before processing
- Cannot use pre-checked boxes
- Must be easy to withdraw

**Best for:** Marketing communications, optional services, non-essential cookies

### 2. Contract

Processing is necessary to perform a contract with the data subject or to take steps before entering a contract.

**Examples:**
- Processing payment to deliver products ordered
- Conducting background checks before employment
- Providing services the customer signed up for

### 3. Legal Obligation

Processing is necessary to comply with a legal obligation.

**Examples:**
- Tax reporting requirements
- Employment law requirements
- Anti-money laundering checks

### 4. Vital Interests

Processing is necessary to protect someone's life.

**Examples:**
- Medical emergencies
- Disaster response

### 5. Public Task

Processing is necessary to perform a task in the public interest or exercise official authority.

**Applies mainly to:** Government agencies, public authorities

### 6. Legitimate Interests

Processing is necessary for legitimate interests pursued by the controller or a third party, unless overridden by the data subject's interests.

**Examples:**
- Fraud prevention
- Network and information security
- Internal administrative purposes

**Requires:** Balancing test to ensure individual rights aren't overridden`,
    },
    {
      id: 'retention',
      title: 'Data Retention',
      content: `## Data Retention Principles

PDPA requires you to keep personal data only for as long as necessary.

### Determining Retention Periods

Consider:

1. **Legal requirements** — Some laws require keeping data for specific periods
2. **Business necessity** — How long do you actually need the data?
3. **Data subject expectations** — What would people reasonably expect?
4. **Statute of limitations** — Potential legal claims may require keeping records

### Common Retention Periods

| Data Type | Typical Period | Reason |
|-----------|---------------|--------|
| Tax records | 5-7 years | Tax law requirements |
| Employment records | 2 years after employment ends | Labor law |
| Customer contracts | Contract period + 10 years | Statute of limitations |
| Website logs | 90 days - 1 year | Security monitoring |
| Marketing data | Until consent withdrawn | Based on consent |

### Implementation Steps

1. **Audit your data** — Know what you have and where
2. **Define retention periods** — Document justification for each
3. **Create retention schedule** — Written policy document
4. **Implement deletion** — Automated where possible
5. **Regular reviews** — Check compliance periodically

### Deletion vs. Anonymization

When retention period ends:

- **Delete** — Remove data completely
- **Anonymize** — Remove identifiers so data can't be linked to individuals (then it's no longer personal data)

Anonymization must be irreversible. If data could be re-identified, it's still personal data.`,
    },
    {
      id: 'breach',
      title: 'Breach Response',
      content: `## Data Breach Response

A data breach is any security incident that leads to accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access to personal data.

### Types of Breaches

- **Confidentiality breach** — Unauthorized disclosure or access
- **Integrity breach** — Unauthorized alteration
- **Availability breach** — Loss of access to data

### When to Notify PDPC

Notify the Personal Data Protection Committee (PDPC) within 72 hours if the breach is likely to result in risk to individuals' rights and freedoms.

**Consider:**
- Type of data involved
- Number of people affected
- Severity of potential harm
- Whether data was encrypted

### When to Notify Individuals

Notify affected individuals without undue delay if the breach is likely to result in high risk to their rights and freedoms.

**Notification should include:**
- What happened (in plain language)
- What data was involved
- What you're doing about it
- What they can do to protect themselves
- How to contact you with questions

### Breach Response Steps

1. **Contain** — Stop the breach from continuing
2. **Assess** — Understand scope and impact
3. **Notify** — PDPC and individuals as required
4. **Remediate** — Fix the vulnerability
5. **Document** — Record everything
6. **Review** — Learn and improve

### Breach Register

Maintain a register of all breaches, including:
- Date and time of breach
- Nature of the breach
- Categories of data affected
- Number of individuals affected
- Actions taken
- Notification decisions and dates`,
    },
    {
      id: 'cross-border',
      title: 'Cross-Border Transfers',
      content: `## Cross-Border Data Transfers

Transferring personal data outside Thailand requires ensuring adequate protection.

### When Transfers Are Allowed

1. **Adequate destination** — Country has adequate data protection standards
2. **Appropriate safeguards** — Binding corporate rules, standard contractual clauses, or certifications
3. **Explicit consent** — Data subject consents after being informed of risks
4. **Contract necessity** — Transfer necessary for contract with data subject
5. **Legal claims** — Necessary for establishing or defending legal claims
6. **Vital interests** — Necessary to protect someone's life
7. **Public interest** — Important reasons of public interest

### Common Scenarios

**Using international cloud services:**
- Review provider's data processing terms
- Check where data is stored and processed
- Ensure appropriate safeguards are in place

**Multinational company sharing:**
- Implement binding corporate rules
- Use standard contractual clauses
- Document transfers in data processing records

### Practical Steps

1. **Map your transfers** — Know what data goes where
2. **Assess destinations** — Understand protection levels
3. **Implement safeguards** — Contracts, policies, technical measures
4. **Document** — Record transfers and safeguards
5. **Review regularly** — Laws and circumstances change`,
    },
  ],
  toc: 'Table of Contents',
  lastUpdated: 'Last updated',
};