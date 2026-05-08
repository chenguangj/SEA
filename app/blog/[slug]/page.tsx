import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const allPosts = [
  {
    slug: "why-200k-context-changes-enterprise-ai",
    category: "Engineering",
    date: "May 2, 2026",
    readTime: "8 min read",
    title: "Why 200K Context Changes Everything for Enterprise AI",
    excerpt:
      "Most enterprise AI deployments fail not because of model quality, but because of context limits. Here's how we built a four-module architecture that treats the 200K window as a first-class design constraint — and why it unlocks workloads that were previously impossible.",
    content: [
      {
        type: "p",
        text: "When enterprises evaluate AI platforms, they focus on the wrong metrics. Benchmark scores, response speed, cost per token — these matter, but they're not what determines whether an enterprise deployment succeeds or fails at scale. The real constraint is context.",
      },
      {
        type: "h2",
        text: "The context problem in enterprise AI",
      },
      {
        type: "p",
        text: "A typical enterprise customer service interaction isn't a single question and answer. It's a conversation that references order history, account status, previous interactions, product documentation, and compliance policies — simultaneously. A model with a 4K or 8K context window can handle a snippet of this. A model with 200K can handle all of it.",
      },
      {
        type: "p",
        text: "This isn't a marginal improvement. It's a categorical one. With 200K context, you can inject an entire day's conversation history, the full product catalog, and the complete compliance rulebook into a single inference call. With 8K, you're making tradeoffs about what to leave out — and those tradeoffs introduce errors.",
      },
      {
        type: "h2",
        text: "How we designed around 200K",
      },
      {
        type: "p",
        text: "Our four-module architecture was designed from the ground up to exploit the 200K window rather than work around it. Module A (real-time conversation) injects full session context plus relevant knowledge base entries per turn. Module B (nightly batch) processes an entire day's conversation corpus — typically 50,000–200,000 turns — in a single pass to generate analytics and update routing rules.",
      },
      {
        type: "p",
        text: "Module B is where the 200K window becomes truly irreplaceable. No other production model can ingest a full day's enterprise conversation log in one call with consistent output quality. We tried. The degradation in instruction-following at the tail end of long contexts with other models was unacceptable for compliance-grade clients.",
      },
      {
        type: "h2",
        text: "Long-text stability matters more than peak performance",
      },
      {
        type: "p",
        text: "One thing that surprised us during development: raw context length isn't enough. A model that performs well at 10K tokens but degrades at 150K is worse than useless for batch processing — it produces inconsistent outputs that are harder to debug than outright failures. We need stable instruction-following across the full context length, every time.",
      },
      {
        type: "p",
        text: "This is why we standardized on Claude. The consistency at 180K+ tokens is qualitatively different from what we observed in other models. For a compliance-grade enterprise platform, that consistency isn't a nice-to-have — it's the product.",
      },
      {
        type: "h2",
        text: "What this unlocks for clients",
      },
      {
        type: "p",
        text: "The practical result for our clients: zero context truncation in customer service conversations, full-corpus batch analytics without sampling, and compliance policy injection that covers the entire rulebook rather than a summarized subset. TokoBesar's 73% ticket reduction and VietPay's 99.2% compliance rate both trace back to this architectural decision.",
      },
    ],
  },
  {
    slug: "nightly-batch-the-hidden-engine",
    category: "Product",
    date: "Apr 18, 2026",
    readTime: "6 min read",
    title: "Nightly Batch: The Hidden Engine Behind Our Token Economics",
    excerpt:
      "78% of our daily token load runs while your team sleeps. We explain why batch processing is the most underrated module in enterprise AI — and how it keeps costs predictable at scale.",
    content: [
      {
        type: "p",
        text: "When people think about AI costs, they think about conversations. Every customer query, every chatbot response — that's where the tokens go, right? For most AI platforms, yes. For SEA FAN, no. 78% of our daily token consumption happens between midnight and 6am, when no customer is talking to anyone.",
      },
      {
        type: "h2",
        text: "What the batch engine actually does",
      },
      {
        type: "p",
        text: "Every night, Module B ingests the full day's conversation corpus for each enterprise client. For a mid-size client, that's 30,000–80,000 conversation turns. For our largest clients, it's over 200,000. The engine processes this corpus to extract KPIs, identify anomalies, update routing rules, flag compliance deviations, and patch knowledge base gaps.",
      },
      {
        type: "p",
        text: "This is work that would otherwise require a team of analysts. Instead, it runs automatically, completes before the business day starts, and produces structured outputs that feed directly into dashboards and the next day's real-time engine configuration.",
      },
      {
        type: "h2",
        text: "Why batch processing is better than real-time analytics",
      },
      {
        type: "p",
        text: "Real-time analytics on conversation data sounds appealing but creates two problems: latency and cost. Analyzing every conversation as it happens adds overhead to each interaction and drives up per-conversation costs unpredictably. Batch processing decouples analysis from interaction — the customer gets a fast response, and the analysis happens later at a fixed, predictable cost.",
      },
      {
        type: "h2",
        text: "The token economics",
      },
      {
        type: "p",
        text: "Because batch jobs run on a fixed schedule with known input sizes, we can predict token consumption with high accuracy. This is what allows us to offer flat-rate pricing rather than per-token billing. The nightly batch load is the largest and most predictable component of our cost structure — which means it's also the easiest to price around.",
      },
      {
        type: "p",
        text: "For clients, this means no surprise bills when conversation volume spikes. The batch load scales with conversation volume, but it scales predictably and on a 24-hour lag — giving us time to adjust capacity before costs materialize.",
      },
    ],
  },
  {
    slug: "sea-language-parity",
    category: "Languages",
    date: "Apr 4, 2026",
    readTime: "10 min read",
    title: "Achieving True Language Parity Across 11 Southeast Asian Languages",
    excerpt:
      "English-first AI platforms treat SEA languages as an afterthought. We built our multilingual knowledge base engine to treat Thai, Vietnamese, Malay, and eight others as first-class citizens — here's what that actually required.",
    content: [
      {
        type: "p",
        text: "Southeast Asia has 680 million people and no dominant language. Thai, Vietnamese, Bahasa Indonesia, Bahasa Malay, Filipino, Khmer, Burmese, Lao, Sinhalese, Tamil, and English are all in active commercial use across the region. An enterprise AI platform that treats any of these as second-class is not a regional platform — it's a platform with regional aspirations.",
      },
      {
        type: "h2",
        text: "What 'language support' usually means",
      },
      {
        type: "p",
        text: "Most AI platforms claim multilingual support. What they mean is: the model can understand and generate text in multiple languages. What they don't mean is: the knowledge base is maintained in those languages, compliance rules are enforced in those languages, and output quality is consistent across all of them.",
      },
      {
        type: "p",
        text: "The gap between 'the model speaks Thai' and 'the platform works in Thai' is enormous. It involves knowledge base translation and maintenance, terminology consistency enforcement, regional compliance variant management, and quality assurance across all language pairs.",
      },
      {
        type: "h2",
        text: "How Module D works",
      },
      {
        type: "p",
        text: "Our Multilingual Knowledge Base engine (Module D) maintains a canonical knowledge base in the client's primary language and automatically propagates updates to all 11 language variants when content changes. The propagation isn't simple translation — it enforces terminology consistency, applies regional compliance variants, and flags cases where direct translation would produce culturally inappropriate output.",
      },
      {
        type: "p",
        text: "When TokoBesar updates their return policy, Module D doesn't just translate the new text. It checks the update against existing terminology in all 11 languages, applies Indonesian consumer protection law variants where relevant, and flags any cases where the policy language conflicts with regional regulatory requirements.",
      },
      {
        type: "h2",
        text: "The consistency challenge",
      },
      {
        type: "p",
        text: "Terminology consistency is harder than it sounds. 'Refund' in English maps to different concepts in different SEA languages, with different legal implications in different jurisdictions. A knowledge base that uses inconsistent terminology across language variants produces inconsistent customer experiences — and in regulated industries, inconsistent compliance outcomes.",
      },
      {
        type: "p",
        text: "We maintain a terminology database for each client that maps key concepts across all 11 languages and enforces consistent usage. This database is updated as part of every Module D sync cycle and reviewed by our language team quarterly.",
      },
    ],
  },
  {
    slug: "proactive-outreach-vs-blast",   category: "Product",
    date: "Mar 21, 2026",
    readTime: "5 min read",
    title: "Proactive Outreach vs. Broadcast Blasts: Why Personalization Wins",
    excerpt:
      "Generic notification campaigns get 8–12% open rates. Our proactive outreach engine averages 3–5× higher. The difference is context injection — and it changes how enterprises think about customer communication.",
    content: [
      {
        type: "p",
        text: "The average enterprise sends thousands of customer notifications per day. Order confirmations, shipping updates, payment reminders, promotional messages. Most of these are generated from templates with a few variable fields filled in. The result is messages that feel generic because they are generic.",
      },
      {
        type: "h2",
        text: "What context injection changes",
      },
      {
        type: "p",
        text: "Module C, our Proactive Outreach Engine, generates each notification by injecting the full customer context into the generation call: order history, previous interactions, stated preferences, current account status, and the triggering event. The result is a message that references the customer's actual situation rather than a template slot.",
      },
      {
        type: "p",
        text: "The difference in open rates is consistent across our client base: 3–5× higher than template-based notifications. The difference in conversion rates for retention campaigns is even larger — customers respond to messages that demonstrate the sender understands their situation.",
      },
      {
        type: "h2",
        text: "The token cost of personalization",
      },
      {
        type: "p",
        text: "Personalized generation costs more per message than template filling. But the math works out: a 4× improvement in open rate means you need 75% fewer messages to achieve the same outcome. For retention campaigns, where the alternative is losing a customer entirely, the ROI is straightforward.",
      },
      {
        type: "p",
        text: "LogiStar reduced their inbound 'where is my package' queries from 45,000 to 6,000 per day by switching from template notifications to Module C-generated updates. The reduction in support load more than offset the increased generation cost.",
      },
      {
        type: "h2",
        text: "Event-triggered vs. scheduled",
      },
      {
        type: "p",
        text: "Module C is event-triggered, not scheduled. Messages are generated when something happens — a shipment status change, a payment failure, a cart abandonment — not on a fixed cadence. This means the message arrives when it's relevant, not when a scheduler fires. Relevance is the other half of why open rates are higher.",
      },
    ],
  },
  {
    slug: "compliance-grade-ai-sea",
    category: "Compliance",
    date: "Mar 7, 2026",
    readTime: "7 min read",
    title: "Building Compliance-Grade AI for Southeast Asia's Regulatory Landscape",
    excerpt:
      "Vietnam's State Bank, Indonesia's OJK, Singapore's MAS — each has distinct requirements for AI-generated customer communications. We break down how we architect compliance into the model layer, not the review layer.",
    content: [
      {
        type: "p",
        text: "Compliance in enterprise AI is usually treated as a post-generation problem: generate the response, then filter it through a compliance checker. This approach has a fundamental flaw — it treats compliance as an exception handler rather than a design constraint. The result is a system that generates non-compliant outputs and catches most of them, rather than a system that generates compliant outputs by design.",
      },
      {
        type: "h2",
        text: "The regulatory landscape in SEA",
      },
      {
        type: "p",
        text: "Southeast Asia's financial services regulators have distinct and sometimes conflicting requirements for AI-generated customer communications. Singapore's MAS requires clear disclosure of AI involvement in customer interactions. Vietnam's State Bank has specific requirements for language used in payment dispute communications. Indonesia's OJK mandates particular disclosures for credit-related messaging.",
      },
      {
        type: "p",
        text: "A platform serving clients across multiple SEA jurisdictions needs to handle all of these simultaneously — and handle them correctly, not approximately.",
      },
      {
        type: "h2",
        text: "Compliance as context injection",
      },
      {
        type: "p",
        text: "Our approach is to inject the full compliance rulebook into the context window for every generation call. Not a summary. Not a filtered subset. The complete policy document, alongside the conversation history and knowledge base content. This is only possible because of the 200K context window — a smaller window forces you to summarize or select, and summarization introduces compliance risk.",
      },
      {
        type: "p",
        text: "VietPay's 99.2% compliance rate — up from a failed regulatory audit — is a direct result of this approach. Their complete State Bank communication guidelines fit within the context window. Every response is generated with full awareness of every rule.",
      },
      {
        type: "h2",
        text: "Nightly audit as a feedback loop",
      },
      {
        type: "p",
        text: "Module B's nightly batch processing includes a compliance audit pass over the full day's conversations. Any deviation from compliance rules is flagged, categorized, and fed back into the next day's context injection as an explicit negative example. The system learns from its own compliance failures without requiring human review of every conversation.",
      },
    ],
  },
  {
    slug: "onboarding-enterprise-in-6-weeks",
    category: "Operations",
    date: "Feb 20, 2026",
    readTime: "4 min read",
    title: "How We Onboard Enterprise Clients in 6 Weeks or Less",
    excerpt:
      "Enterprise AI deployments have a reputation for 6-month timelines. Ours average 6 weeks. Here's the playbook: what we standardize, what we customize, and where most projects lose time.",
    content: [
      {
        type: "p",
        text: "Enterprise software deployments are slow. Everyone knows this. The reasons are usually the same: integration complexity, data migration, stakeholder alignment, security review, and the inevitable scope creep that happens when a project runs long enough for requirements to change. We've built our onboarding process to eliminate each of these in sequence.",
      },
      {
        type: "h2",
        text: "Week 1–2: Knowledge base ingestion",
      },
      {
        type: "p",
        text: "The first two weeks are about data, not integration. We ingest the client's existing knowledge base — product documentation, policy documents, FAQ content, compliance guidelines — and build the initial multilingual knowledge base across all required languages. This is the highest-value work and the work that most clients underestimate. A well-structured knowledge base is the foundation of everything else.",
      },
      {
        type: "h2",
        text: "Week 3–4: Integration and configuration",
      },
      {
        type: "p",
        text: "We connect to the client's existing systems via API: CRM, order management, ticketing, and communication channels. Our standard integration layer covers Salesforce, Zendesk, Shopify, and the major SEA e-commerce platforms. Custom integrations add time — this is where most projects that run long lose their schedule.",
      },
      {
        type: "h2",
        text: "Week 5–6: Testing and go-live",
      },
      {
        type: "p",
        text: "The final two weeks are shadow mode testing — the platform runs in parallel with the existing system, generating responses that are reviewed but not sent. This surfaces edge cases, compliance issues, and knowledge base gaps before go-live. Most clients find 20–40 knowledge base gaps during this phase. We patch them before launch.",
      },
      {
        type: "p",
        text: "The 6-week timeline holds when clients come prepared: a structured knowledge base, clear API access, and a designated technical contact. When those aren't in place at kickoff, the timeline extends. The fastest onboarding we've done was 11 days. The longest was 14 weeks, for a client with a legacy CRM that required custom integration work.",
      },
    ],
  },
  {
    slug: "token-economics-enterprise",
    category: "Engineering",
    date: "Feb 6, 2026",
    readTime: "9 min read",
    title: "Token Economics at Enterprise Scale: How We Keep Costs Predictable",
    excerpt:
      "A single enterprise client processes ~410M tokens per day on our platform. At that scale, token efficiency isn't a nice-to-have — it's the difference between a viable business and a runaway cost center.",
    content: [
      {
        type: "p",
        text: "410 million tokens per day, per enterprise client. That's the number we design around. At that scale, a 10% improvement in token efficiency is worth more than any feature we could ship. And a 10% cost overrun is the difference between a profitable client and a loss-making one.",
      },
      {
        type: "h2",
        text: "Where the tokens go",
      },
      {
        type: "p",
        text: "The breakdown for a typical enterprise client: Module B (nightly batch) accounts for 78% of daily token consumption. Module A (real-time conversation) accounts for 15%. Module C (proactive outreach) accounts for 5%. Module D (knowledge base sync) accounts for 2%. This distribution is why batch processing is the primary lever for cost management.",
      },
      {
        type: "h2",
        text: "Context reuse in batch processing",
      },
      {
        type: "p",
        text: "The most significant efficiency gain in our architecture comes from context reuse in batch processing. When Module B processes a day's conversations, it doesn't process each conversation independently. It processes them in structured batches that share common context — the compliance rulebook, the product catalog, the routing rules — loaded once and reused across thousands of conversation analyses.",
      },
      {
        type: "p",
        text: "This shared context approach reduces token consumption in batch processing by approximately 40% compared to independent per-conversation processing. At 320M tokens per night, that's a 130M token saving per client per day.",
      },
      {
        type: "h2",
        text: "Flat-rate pricing as a forcing function",
      },
      {
        type: "p",
        text: "Our flat-rate pricing model is both a client benefit and an internal discipline. Because we absorb token cost variance, we have a direct financial incentive to optimize token efficiency. Every architectural decision that reduces token consumption improves our margins. This alignment between our economics and our engineering priorities is intentional.",
      },
      {
        type: "h2",
        text: "The 35-client path to $1M monthly revenue",
      },
      {
        type: "p",
        text: "At our Business plan pricing, 35 enterprise clients generates approximately $1M in monthly revenue. At current token costs and our efficiency architecture, this is a viable margin structure. The key constraint is not revenue — it's the operational capacity to onboard and support 35 enterprise clients simultaneously. That's the scaling challenge we're working on now.",
      },
    ],
  },
  {
    slug: "whatsapp-line-integration-sea",
    category: "Product",
    date: "Jan 24, 2026",
    readTime: "5 min read",
    title: "WhatsApp and LINE: Why Messaging Apps Are the Real Enterprise Channel in SEA",
    excerpt:
      "Email open rates in Southeast Asia average 18%. WhatsApp and LINE open rates average 92%. If your enterprise AI isn't deployed on the channels customers actually use, you're solving the wrong problem.",
    content: [
      {
        type: "p",
        text: "Enterprise software teams default to email. It's familiar, it's measurable, and it integrates cleanly with CRM systems. In most Western markets, this is a reasonable default. In Southeast Asia, it's a mistake.",
      },
      {
        type: "h2",
        text: "Where SEA customers actually are",
      },
      {
        type: "p",
        text: "WhatsApp has over 400 million active users in Southeast Asia. LINE dominates in Thailand with 47 million users. Zalo is the primary messaging platform in Vietnam with 74 million users. Facebook Messenger remains significant across the Philippines and Indonesia. Email, by comparison, is a secondary channel that customers check infrequently and often ignore.",
      },
      {
        type: "p",
        text: "The open rate gap is not marginal. Enterprise email campaigns in SEA average 18–22% open rates. WhatsApp Business messages average 92%. LINE official account messages average 85%. The difference isn't just reach — it's response time. Customers reply to WhatsApp messages within minutes. Email replies, when they come, take hours or days.",
      },
      {
        type: "h2",
        text: "What this means for enterprise AI deployment",
      },
      {
        type: "p",
        text: "An AI platform that only supports web chat and email is solving a fraction of the enterprise communication problem in SEA. Our Module A (real-time conversation) and Module C (proactive outreach) both support WhatsApp Business API, LINE Messaging API, Zalo OA, and Facebook Messenger as first-class channels — not afterthoughts bolted on after the fact.",
      },
      {
        type: "p",
        text: "The technical challenge is that each platform has distinct message format constraints, rate limits, and compliance requirements. WhatsApp Business API requires pre-approved message templates for outbound notifications. LINE has strict content policies for official accounts. Zalo has specific requirements for business verification. Our integration layer handles all of these transparently.",
      },
      {
        type: "h2",
        text: "Channel-aware context injection",
      },
      {
        type: "p",
        text: "One underappreciated complexity: the appropriate tone and format for a WhatsApp message is different from a web chat response. WhatsApp messages are read on mobile, often in a personal context. They should be concise, conversational, and avoid corporate jargon. Our context injection includes channel metadata so the model adapts its output style to the delivery channel automatically.",
      },
    ],
  },
  {
    slug: "knowledge-base-cold-start",
    category: "Operations",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    title: "The Knowledge Base Cold Start Problem — and How We Solve It",
    excerpt:
      "Every new enterprise deployment starts with the same challenge: the AI knows nothing about your business. Here's the structured ingestion process we use to get a production-ready knowledge base in under two weeks.",
    content: [
      {
        type: "p",
        text: "The cold start problem is the first thing every new enterprise client encounters. On day one, the AI has no knowledge of your products, your policies, your tone of voice, or your compliance requirements. Getting from zero to production-ready is the most critical phase of any deployment — and the phase most likely to go wrong.",
      },
      {
        type: "h2",
        text: "What goes into a knowledge base",
      },
      {
        type: "p",
        text: "A production knowledge base for an enterprise client typically contains: product catalog and specifications, pricing and promotion policies, return and refund procedures, shipping and logistics information, compliance guidelines and approved response templates, escalation procedures, and FAQ content derived from historical support tickets. The last item is often the most valuable and the most overlooked.",
      },
      {
        type: "h2",
        text: "The ingestion process",
      },
      {
        type: "p",
        text: "We start with a structured document audit: what does the client have, in what format, and how current is it? Most enterprise clients have more documentation than they realize, spread across wikis, shared drives, and email threads. The audit typically surfaces 60–80% of what we need. The remaining 20–40% has to be created from scratch, usually by interviewing subject matter experts.",
      },
      {
        type: "p",
        text: "Once we have the raw material, we run it through a structured ingestion pipeline that normalizes format, extracts key entities and relationships, identifies gaps and contradictions, and generates the initial multilingual variants. The pipeline flags anything that requires human review — typically compliance-sensitive content and anything where the source documents contradict each other.",
      },
      {
        type: "h2",
        text: "Gap detection in shadow mode",
      },
      {
        type: "p",
        text: "The most reliable way to find knowledge base gaps is to run the system in shadow mode against real customer queries. We do this for the final two weeks of every onboarding. The shadow mode system generates responses that are reviewed but not sent — and every query that produces a low-confidence response or a hallucination is flagged as a knowledge base gap. Most clients find 20–40 gaps this way. We patch them before go-live.",
      },
    ],
  },
  {
    slug: "sea-fintech-ai-regulation-2026",
    category: "Compliance",
    date: "Dec 19, 2025",
    readTime: "8 min read",
    title: "What the 2026 SEA Fintech AI Regulations Mean for Enterprise Deployments",
    excerpt:
      "Singapore, Vietnam, and Indonesia all updated their AI governance frameworks in late 2025. We break down what changed, what it means for AI-generated customer communications, and how our compliance architecture already covers the new requirements.",
    content: [
      {
        type: "p",
        text: "The regulatory environment for AI in financial services across Southeast Asia shifted significantly in the second half of 2025. Singapore's MAS, Vietnam's State Bank, and Indonesia's OJK all published updated guidance on AI use in customer-facing applications. For enterprise clients using AI-generated communications, the implications are material.",
      },
      {
        type: "h2",
        text: "Singapore MAS: AI disclosure requirements",
      },
      {
        type: "p",
        text: "MAS's updated guidance requires financial institutions to disclose AI involvement in customer interactions where the AI is making or influencing decisions that affect the customer's financial position. This includes AI-generated responses to account queries, payment dispute communications, and credit-related messaging. The disclosure must be clear, prominent, and in the customer's preferred language.",
      },
      {
        type: "h2",
        text: "Vietnam State Bank: Communication language standards",
      },
      {
        type: "p",
        text: "Vietnam's State Bank updated its requirements for customer communication language in financial services AI. The new standards specify approved terminology for payment dispute communications, require plain-language explanations for any automated decision that affects a customer's account, and mandate that AI-generated communications be distinguishable from human-generated ones in the audit trail.",
      },
      {
        type: "h2",
        text: "Indonesia OJK: Data localization and audit requirements",
      },
      {
        type: "p",
        text: "OJK's updated framework adds data localization requirements for AI systems processing Indonesian customer data, and mandates quarterly audit reports on AI decision-making in customer communications. For enterprise clients, this means the AI platform must be able to generate structured audit logs of every AI-generated communication, including the context and rules that informed the output.",
      },
      {
        type: "h2",
        text: "How our architecture already covers these requirements",
      },
      {
        type: "p",
        text: "Our compliance-by-design approach means most of these requirements were already met before the regulations were published. Disclosure language is injected via the context window as part of every relevant interaction. Audit logs are generated automatically by Module B's nightly batch processing. Data localization is handled at the infrastructure level for clients in regulated jurisdictions. The new regulations required configuration changes for some clients, but no architectural changes to the platform.",
      },
    ],
  },
  {
    slug: "thai-language-nuance-ai",
    category: "Languages",
    date: "Dec 5, 2025",
    readTime: "7 min read",
    title: "Thai Language Nuance in AI: Why Politeness Levels Matter for Enterprise",
    excerpt:
      "Thai has five distinct politeness registers, each appropriate for different customer relationships. An AI that uses the wrong register doesn't just sound awkward — it signals disrespect. Here's how we handle register selection in production.",
    content: [
      {
        type: "p",
        text: "Thai is one of the most register-sensitive languages in Southeast Asia. The choice of pronouns, verb forms, and particles signals the speaker's relationship to the listener — and getting it wrong in a customer service context doesn't just sound unnatural. It communicates disrespect, over-familiarity, or condescension, depending on the error.",
      },
      {
        type: "h2",
        text: "The five registers and when they apply",
      },
      {
        type: "p",
        text: "Thai has five main politeness registers: street Thai (informal, peer-to-peer), common Thai (standard informal), formal Thai (business and official contexts), elegant Thai (formal written and ceremonial), and religious Thai (used with monks and in religious contexts). For enterprise customer service, the relevant registers are common Thai for general customer interactions and formal Thai for financial services, complaints, and high-value customer communications.",
      },
      {
        type: "h2",
        text: "The pronoun problem",
      },
      {
        type: "p",
        text: "Thai has no single equivalent of 'I' or 'you'. The correct pronoun depends on the speaker's gender, the listener's status, and the formality of the context. A customer service AI addressing a customer must select the appropriate second-person pronoun — and the options range from the respectful 'khun' to various informal alternatives that would be inappropriate in a business context. An AI that defaults to a single pronoun across all contexts will be wrong in a significant fraction of interactions.",
      },
      {
        type: "h2",
        text: "How we handle register selection",
      },
      {
        type: "p",
        text: "Our Thai language configuration includes explicit register rules in the knowledge base context injection. The rules specify the appropriate register for each interaction type — general queries, complaint handling, payment disputes, VIP customer communications — and include examples of correct and incorrect usage. The nightly batch engine audits Thai-language conversations for register consistency and flags deviations for knowledge base updates.",
      },
      {
        type: "p",
        text: "We also maintain a Thai language review process with native speakers who audit a sample of conversations monthly. This catches subtle register errors that automated detection misses — particularly in edge cases where the customer's own language signals a preference for a different register than the default.",
      },
    ],
  },
  {
    slug: "multi-tenant-architecture-isolation",
    category: "Engineering",
    date: "Nov 21, 2025",
    readTime: "10 min read",
    title: "Multi-Tenant Architecture: How We Keep 35 Enterprise Clients Isolated",
    excerpt:
      "When a single platform serves 35 enterprise clients — each with sensitive customer data, distinct compliance requirements, and different knowledge bases — data isolation isn't optional. Here's the architecture that makes it work.",
    content: [
      {
        type: "p",
        text: "Multi-tenancy is a solved problem in most SaaS categories. In enterprise AI, it's harder. The challenge isn't just data isolation at the storage layer — it's ensuring that context injected for one client never influences outputs for another, that compliance rules for one jurisdiction don't bleed into another, and that a performance issue for one client doesn't degrade service for others.",
      },
      {
        type: "h2",
        text: "Tenant isolation at the context layer",
      },
      {
        type: "p",
        text: "The most critical isolation boundary in our architecture is at the context injection layer. Every inference call is constructed with a tenant-scoped context that includes only that client's knowledge base, compliance rules, and conversation history. There is no shared context between tenants. The context construction pipeline enforces this at the code level — it's not a configuration option that could be misconfigured.",
      },
      {
        type: "h2",
        text: "Knowledge base isolation",
      },
      {
        type: "p",
        text: "Each tenant's knowledge base is stored in an isolated namespace with no cross-tenant read access. Module D's knowledge base sync operations are scoped to a single tenant and cannot access or modify another tenant's data. This is enforced at the storage layer, not just the application layer — a bug in the application code cannot cause cross-tenant knowledge base contamination.",
      },
      {
        type: "h2",
        text: "Batch processing isolation",
      },
      {
        type: "p",
        text: "Module B's nightly batch jobs run in isolated execution environments, one per tenant. Batch jobs for different tenants cannot share memory or storage. The job scheduler ensures that a long-running batch job for one tenant cannot delay batch processing for another — each tenant has a guaranteed processing window.",
      },
      {
        type: "h2",
        text: "Compliance boundary enforcement",
      },
      {
        type: "p",
        text: "Compliance rules are tenant-scoped and cannot be shared or inherited across tenants. A financial services client in Vietnam has different compliance requirements than a logistics client in Thailand — and the platform enforces these boundaries at every layer. The audit logs generated by Module B are also tenant-scoped and cannot be accessed by other tenants or by platform operators without explicit authorization.",
      },
      {
        type: "h2",
        text: "Performance isolation",
      },
      {
        type: "p",
        text: "We use resource quotas at the inference layer to prevent a single tenant's traffic spike from degrading service for others. Each tenant has a guaranteed minimum throughput and a burst capacity ceiling. The nightly batch scheduler distributes batch jobs across the processing window to avoid contention. In practice, our largest clients process their batch jobs in 2–3 hours, leaving ample capacity for the remaining tenants.",
      },
    ],
  },
];

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);
  const others = allPosts
    .filter((p) => p.slug !== post.slug && p.category !== post.category)
    .slice(0, 2 - related.length);
  const relatedPosts = [...related, ...others].slice(0, 2);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Header */}
      <section className="relative pt-40 pb-16 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </a>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-2 py-0.5 border border-foreground/20 text-xs font-mono">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                {post.date} · {post.readTime}
              </span>
            </div>
            <h1 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1] tracking-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-32">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                  In this article
                </p>
                <ul className="space-y-3">
                  {post.content
                    .filter((b) => b.type === "h2")
                    .map((b) => (
                      <li key={b.text}>
                        <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer leading-snug block">
                          {b.text}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>

            {/* Content */}
            <article className="lg:col-span-7 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-foreground pl-6">
                {post.excerpt}
              </p>
              {post.content.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={i}
                      className="font-display text-2xl lg:text-3xl tracking-tight pt-6"
                    >
                      {block.text}
                    </h2>
                  );
                }
                return (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {block.text}
                  </p>
                );
              })}
            </article>

            {/* Right gutter */}
            <div className="lg:col-span-2 hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 border-t border-foreground/10 bg-foreground/[0.02]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-12">
              More articles
            </p>
            <div className="grid md:grid-cols-2 gap-px bg-foreground/10">
              {relatedPosts.map((p) => (
                <a
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-background p-8 lg:p-10 flex flex-col gap-6 hover:bg-foreground/[0.02] transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 border border-foreground/20 text-xs font-mono">
                      {p.category}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      {p.readTime}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl lg:text-2xl leading-tight mb-3 group-hover:text-muted-foreground transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {p.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                    <span className="text-xs text-muted-foreground font-mono">
                      {p.date}
                    </span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                View all articles
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      )}

      <FooterSection />
    </main>
  );
}
