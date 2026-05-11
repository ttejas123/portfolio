// ===== PORTFOLIO DATA CONSTANTS =====
// All content for the portfolio website

export const PERSONAL = {
  name: "Tejas Thakare",
  role: "Senior Full Stack Engineer",
  tagline: "Backend-heavy full stack engineer focused on realtime architectures and distributed systems.",
  email: "tthakare73@gmail.com",
  phone: "+91 8433841610",
  linkedin: "https://linkedin.com/in/tejas-thakare-041281152",
  location: "Mumbai, India",
};

export const HERO_HEADLINES = [
  "Building systems that process millions of events.",
  "Engineering scalable backends, not just interfaces.",
  "Architecting realtime pipelines for distributed scale.",
];

export const TERMINAL_LOGS = [
  { level: "INFO", service: "api-gateway", message: "Request routed to anomaly-engine [latency: 12ms]" },
  { level: "INFO", service: "rabbitmq", message: "Event published: order.analytics.updated" },
  { level: "DEBUG", service: "redis-cache", message: "Cache HIT for merchant:config:4821 [TTL: 3600s]" },
  { level: "INFO", service: "pg-writer", message: "Batch insert: 2,847 records committed [15ms]" },
  { level: "WARN", service: "anomaly-engine", message: "Spike detected: merchant_1204 conversion +340%" },
  { level: "INFO", service: "worker-pool", message: "Job processed: daily-aggregation [duration: 892ms]" },
  { level: "DEBUG", service: "cache-layer", message: "Invalidation cascade: merchant:*:analytics" },
  { level: "INFO", service: "event-bus", message: "Consumer lag: 0 | Throughput: 14,230 msg/s" },
  { level: "INFO", service: "load-balancer", message: "Health check passed: all 6 instances healthy" },
  { level: "WARN", service: "alarm-system", message: "Alert triggered: revenue_drop > 25% for client #892" },
  { level: "INFO", service: "cron-scheduler", message: "Onboarding pipeline completed in 18 minutes" },
  { level: "DEBUG", service: "query-planner", message: "Index scan on idx_merchant_date [rows: 42,891]" },
  { level: "INFO", service: "gtm-tracker", message: "GA4 event batch flushed: 1,204 events" },
  { level: "INFO", service: "s3-archiver", message: "Daily snapshot archived: 2.4GB compressed" },
  { level: "ERROR", service: "circuit-breaker", message: "Downstream timeout: payment-service [retry: 2/3]" },
  { level: "INFO", service: "feature-flags", message: "Flag evaluated: dark_launch_v2 → enabled for 15%" },
];

export const IMPACT_METRICS = [
  {
    value: 98,
    suffix: "%",
    label: "Onboarding Reduction",
    description: "15 days → 20 minutes",
    icon: "zap",
  },
  {
    value: 1,
    suffix: "M+",
    label: "Records / Day",
    description: "Processed through anomaly detection",
    icon: "activity",
  },
  {
    value: 200,
    suffix: "+",
    label: "Monitored Clients",
    description: "Real-time anomaly surveillance",
    icon: "search",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "System Uptime",
    description: "Across distributed microservices",
    icon: "check-circle",
  },
  {
    value: 6,
    suffix: "x",
    label: "Services Orchestrated",
    description: "Event-driven microservice mesh",
    icon: "link",
  },
];

export const ENGINEERING_CONCEPTS = [
  {
    title: "Event-Driven Architecture",
    description: "Building systems where services communicate through events, not direct calls. RabbitMQ consumers, dead-letter queues, and eventual consistency patterns.",
    detail: "At Brandlock, every data mutation publishes an event. Downstream services consume asynchronously, enabling independent scaling and fault isolation.",
    icon: "bolt",
    tags: ["RabbitMQ", "Pub/Sub", "Async"],
  },
  {
    title: "Caching Philosophy",
    description: "Multi-layer caching with intelligent invalidation. Not just Redis GET/SET — understanding cache stampedes, write-through vs write-behind, and TTL strategies.",
    detail: "Implemented cascading invalidation patterns where a merchant config change triggers selective cache purges across related analytics keys.",
    icon: "snowflake",
    tags: ["Redis", "CDN", "Invalidation"],
  },
  {
    title: "PostgreSQL Internals",
    description: "Beyond basic queries — understanding MVCC, query planner behavior, index strategies, and connection pooling for high-throughput writes.",
    detail: "Optimized batch insert pipelines processing 1M+ daily records using COPY commands, partial indexes, and table partitioning.",
    icon: "database",
    tags: ["MVCC", "Indexing", "Partitioning"],
  },
  {
    title: "Scaling Challenges",
    description: "Horizontal vs vertical, stateless services, database connection limits, queue backpressure, and knowing when NOT to scale.",
    detail: "Designed stateless workers behind load balancers with health-check-based routing, enabling zero-downtime deployments.",
    icon: "trending-up",
    tags: ["Horizontal", "Load Balancing", "Stateless"],
  },
  {
    title: "Feature Flags",
    description: "Runtime feature control without deployments. Progressive rollouts, A/B testing infrastructure, and kill switches for safe experimentation.",
    detail: "Built flag evaluation systems that check user segments, percentage rollouts, and environment-specific overrides in <1ms.",
    icon: "flag",
    tags: ["Rollouts", "A/B Testing", "Kill Switch"],
  },
  {
    title: "Distributed Systems",
    description: "CAP theorem tradeoffs, consensus patterns, idempotency, and the reality of network partitions in production systems.",
    detail: "Implemented idempotent event handlers with deduplication keys, ensuring exactly-once processing semantics across retries.",
    icon: "globe",
    tags: ["CAP", "Idempotency", "Consensus"],
  },
  {
    title: "Realtime Dashboards",
    description: "Server-sent events, WebSocket connections, efficient DOM updates, and the architecture behind live-updating analytics views.",
    detail: "Built React dashboards with Redux-driven real-time state that handle 10+ metric streams without frame drops.",
    icon: "monitor",
    tags: ["WebSocket", "SSE", "Live Data"],
  },
  {
    title: "Why Architecture Matters",
    description: "Architecture isn't about diagrams — it's about encoding decisions that compound. Good architecture makes the next 100 features cheaper to build.",
    detail: "Modular service boundaries at Brandlock enabled the team to ship new analytics features in days instead of weeks.",
    icon: "layers",
    tags: ["Modularity", "Boundaries", "Decisions"],
  },
];

export const PROJECTS = [
  {
    title: "Anomaly Detection Engine",
    description: "Real-time alarm system processing 1M+ records daily, detecting conversion spikes and revenue drops across 200+ merchant clients.",
    architecture: "Event-driven pipeline: PostgreSQL → RabbitMQ → Worker Pool → Alert Router → Notification Service",
    challenges: ["Processing 1M records with sub-second latency", "Tuning sensitivity thresholds per-client", "Reducing false positive rates"],
    tradeoffs: "Chose eventual consistency over strong consistency to prioritize throughput. Alerts may lag 30s but system processes 14K msg/s.",
    tags: ["Node.js", "PostgreSQL", "RabbitMQ", "Redis"],
    status: "production",
  },
  {
    title: "Realtime Analytics Dashboard",
    description: "Event-driven, API-powered dashboard with live inter-component communication and real-time conversion metrics for e-commerce clients.",
    architecture: "React + Redux → WebSocket Gateway → Express API → PostgreSQL + Redis Cache Layer",
    challenges: ["Maintaining 60fps with 10+ live data streams", "Efficient re-renders with normalized state", "Cross-component event coordination"],
    tradeoffs: "Used Redux over Context API for predictable state updates at scale. Larger bundle but better debugging and time-travel.",
    tags: ["React", "Redux", "WebSocket", "Express"],
    status: "production",
  },
  {
    title: "Client Onboarding Automation",
    description: "Reduced merchant onboarding from 15 days to 20 minutes through automated workflows, cron jobs, and self-service configuration.",
    architecture: "Cron Scheduler → Validation Pipeline → Config Generator → S3 Asset Upload → GTM Auto-Integration",
    challenges: ["Handling 50+ configuration variations", "Rollback mechanisms for failed setups", "Idempotent re-execution"],
    tradeoffs: "Prioritized reliability over speed — each step is checkpointed to S3 enabling full rollback and audit trail.",
    tags: ["Node.js", "AWS Lambda", "S3", "Cron"],
    status: "production",
  },
  {
    title: "Distributed Caching Layer",
    description: "Multi-tier Redis caching with cascading invalidation, handling 50K+ cache operations per minute across merchant data.",
    architecture: "Application Layer → Local Cache (LRU) → Redis Cluster → PostgreSQL (source of truth)",
    challenges: ["Cache stampede prevention", "Cascading invalidation across related keys", "Consistent hashing for cluster distribution"],
    tradeoffs: "Implemented write-through caching with async invalidation. Slight staleness window (< 5s) but 10x read throughput improvement.",
    tags: ["Redis", "LRU", "Consistent Hashing"],
    status: "production",
  },
  {
    title: "NFT Minting Platform (Solana)",
    description: "Web3 gaming platform with NFT/SFT minting using Metaplex, handling 100+ concurrent players with on-chain reward distribution.",
    architecture: "React Frontend → GraphQL API → Loopback 4 → Solana RPC → Metaplex Smart Contracts",
    challenges: ["Transaction finality latency on Solana", "Concurrent mint race conditions", "On-chain metadata management"],
    tradeoffs: "Used server-side transaction construction to abstract blockchain complexity from users. Centralization tradeoff for UX.",
    tags: ["Solana", "Metaplex", "GraphQL", "Loopback 4"],
    status: "shipped",
  },
  {
    title: "Feature Flag Infrastructure",
    description: "Runtime feature control system enabling progressive rollouts, A/B testing, and instant kill switches without redeployment.",
    architecture: "SDK Client → Flag Evaluation Engine → Rule Matcher → Segment Resolver → Redis Cache",
    challenges: ["Sub-millisecond evaluation latency", "Consistent flag state across distributed services", "Percentage-based rollout accuracy"],
    tradeoffs: "Cached flag state locally with 30s refresh. Trades immediate consistency for elimination of network latency on hot paths.",
    tags: ["Redis", "Node.js", "SDK Design"],
    status: "experiment",
  },
  {
    title: "HLS Stream Collector",
    description: "Browser extension intercepting video stream URLs from web traffic, with HLS playback preview and regex-based filtering.",
    architecture: "Chrome Extension (Manifest V3) → WebRequest Interceptor → Stream Parser → HLS.js Player",
    challenges: ["Bypassing anti-bot detection (Cloudflare)", "Efficient stream URL deduplication", "Memory management for long sessions"],
    tradeoffs: "Used declarativeNetRequest over webRequest for Manifest V3 compliance. Less flexibility but future-proof.",
    tags: ["Chrome APIs", "HLS.js", "ManifestV3"],
    status: "experiment",
  },
  {
    title: "Session Replay Engine",
    description: "rrweb-based session recording platform capturing DOM mutations, user interactions, and network events for debugging.",
    architecture: "rrweb SDK → Event Compressor → S3 Storage → Replay Player → Timeline UI",
    challenges: ["Minimizing recording overhead on client", "Efficient DOM snapshot compression", "Privacy-safe data masking"],
    tradeoffs: "Snapshot-based approach over mutation-only recording. Larger payloads but guaranteed replay fidelity.",
    tags: ["rrweb", "DOM APIs", "S3", "Compression"],
    status: "experiment",
  },
];

export const ARCHITECTURE_DIAGRAMS = {
  rabbitmq: {
    label: "RabbitMQ Event Flow",
    description: "Asynchronous event processing pipeline with dead-letter handling and consumer groups",
  },
  redis: {
    label: "Redis Cache Strategy",
    description: "Multi-layer caching with cascading invalidation and write-through patterns",
  },
  pipeline: {
    label: "Analytics Pipeline",
    description: "End-to-end data flow from merchant storefronts to real-time dashboards",
  },
};

export const JOURNAL_TOPICS = [
  {
    title: "B+ Tree Indexing",
    category: "Data Structures",
    description: "How PostgreSQL uses B+ Trees for efficient range queries and ordered traversal. Understanding node splitting, fill factors, and partial indexes.",
    icon: "git-branch",
  },
  {
    title: "Node.js Event Loop",
    category: "Runtime Internals",
    description: "The single-threaded model, libuv thread pool, microtask queue priorities, and why understanding the event loop is critical for high-throughput servers.",
    icon: "refresh-cw",
  },
  {
    title: "Distributed Consensus",
    category: "Distributed Systems",
    description: "Raft, Paxos, and the practical reality of achieving consensus in distributed systems. Leader election, log replication, and split-brain scenarios.",
    icon: "users",
  },
  {
    title: "Redis Internals",
    category: "Databases",
    description: "Single-threaded event loop, data structures (skip lists, hash tables), persistence modes (RDB vs AOF), and replication strategies.",
    icon: "cpu",
  },
  {
    title: "Query Optimization",
    category: "Performance",
    description: "Reading EXPLAIN ANALYZE output, understanding sequential vs index scans, join strategies, and when the planner makes suboptimal choices.",
    icon: "target",
  },
  {
    title: "Realtime Processing",
    category: "Architecture",
    description: "Stream processing vs batch processing, backpressure handling, windowing strategies, and building systems that react in milliseconds.",
    icon: "radio",
  },
  {
    title: "System Bottlenecks",
    category: "Performance",
    description: "Identifying and resolving bottlenecks: database connection pooling, N+1 queries, lock contention, and memory pressure patterns.",
    icon: "wrench",
  },
  {
    title: "Feature Flag Patterns",
    category: "Architecture",
    description: "Trunk-based development with flags, percentage rollouts, user segment targeting, and the operational cost of long-lived flags.",
    icon: "flag",
  },
];

export const EXPERIENCE = [
  {
    company: "Brandlock",
    role: "Software Engineer",
    period: "Apr 2023 — Present",
    location: "Mumbai",
    mission: "E-commerce Conversion Optimization SaaS",
    description: "Engineering the backend infrastructure for a conversion optimization platform serving 200+ e-commerce merchants.",
    achievements: [
      { metric: "98%", description: "Reduced client onboarding time from 15 days to 20 minutes" },
      { metric: "1M+", description: "Daily records processed through anomaly detection engine" },
      { metric: "200+", description: "Clients monitored with real-time alerting system" },
      { metric: "0", description: "Manual monitoring overhead after automation" },
    ],
    highlights: [
      "Automated onboarding workflows using Node.js and cron jobs",
      "Built data anomaly alarm system with auto-alert assignment",
      "Developed microservices with Express.js, PostgreSQL, Redis, RabbitMQ",
      "Built event-driven analytics dashboard with React.js and Redux",
      "Integrated GTM and GA4 for conversion funnel analysis",
      "Implemented coupon validation with fraud detection logic",
      "Managed AWS infrastructure (S3, EC2, Lambda) for high availability",
    ],
    stack: ["Node.js", "React", "PostgreSQL", "Redis", "RabbitMQ", "AWS", "GTM/GA4"],
  },
  {
    company: "Soulofox Studio",
    role: "Full Stack Developer",
    period: "Mar 2022 — Apr 2023",
    location: "Mumbai",
    mission: "Web3 Gaming Platform — NFTs on Solana",
    description: "Building a real-time Web3 gaming platform with NFT/SFT mechanics on the Solana blockchain.",
    achievements: [
      { metric: "100+", description: "Concurrent users on real-time gaming platform" },
      { metric: "0", description: "Downtime during peak gaming sessions" },
      { metric: "3x", description: "API response time improvement through query optimization" },
    ],
    highlights: [
      "Built real-time Web3 gaming platform with Node.js microservices (Loopback 4)",
      "Integrated Solana smart contracts for NFT-based rewards using Metaplex",
      "Created RESTful and GraphQL APIs with optimized query performance",
      "Improved CI/CD pipelines using Docker and AWS",
    ],
    stack: ["Node.js", "Loopback 4", "Solana", "Metaplex", "GraphQL", "Docker", "AWS"],
  },
];

export const SKILLS = {
  backend: ["Node.js", "Express.js", "Loopback 4", "REST APIs", "GraphQL", "RabbitMQ", "Redis"],
  frontend: ["React.js", "Next.js", "Redux", "TypeScript", "TailwindCSS"],
  databases: ["PostgreSQL", "Amazon Redshift"],
  cloud: ["AWS (S3, EC2, Lambda)", "Docker", "CI/CD", "Git"],
  analytics: ["GA4", "GTM", "Adobe Analytics"],
  blockchain: ["Solana", "Metaplex", "Smart Contracts"],
};

export const NETWORK_NODES = [
  { id: "api", label: "API Gateway", x: 0.5, y: 0.15 },
  { id: "auth", label: "Auth", x: 0.25, y: 0.3 },
  { id: "rabbitmq", label: "RabbitMQ", x: 0.75, y: 0.3 },
  { id: "redis", label: "Redis", x: 0.2, y: 0.55 },
  { id: "worker", label: "Worker Pool", x: 0.5, y: 0.5 },
  { id: "postgres", label: "PostgreSQL", x: 0.8, y: 0.55 },
  { id: "s3", label: "S3 Storage", x: 0.35, y: 0.75 },
  { id: "alarm", label: "Alarm Engine", x: 0.65, y: 0.75 },
  { id: "dashboard", label: "Dashboard", x: 0.5, y: 0.9 },
];

export const NETWORK_EDGES = [
  { from: "api", to: "auth" },
  { from: "api", to: "rabbitmq" },
  { from: "api", to: "worker" },
  { from: "rabbitmq", to: "worker" },
  { from: "worker", to: "redis" },
  { from: "worker", to: "postgres" },
  { from: "worker", to: "s3" },
  { from: "postgres", to: "alarm" },
  { from: "alarm", to: "dashboard" },
  { from: "redis", to: "dashboard" },
  { from: "auth", to: "redis" },
];
