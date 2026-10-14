export const profile = {
  name: "Dineth Chathurya",
  handle: "dc@control-plane",
  title: "Associate DevOps & Platform Engineer",
  cluster: "dc-prod-01",
  email: "dinethchathurya2002@gmail.com",
  linkedin: "https://linkedin.com/in/dineth-chathurya",
  github: "https://github.com/Dinethchathurya",
  resumeHref: "/dineth-chathurya-cv.pdf",
} as const;

export const strengths = [
  {
    id: "cloud-linux",
    pool: "edge-pool",
    title: "Cloud & Linux",
    load: 92,
    items: ["AWS", "Ubuntu", "SSH", "Nginx", "VPS hardening"],
  },
  {
    id: "containers",
    pool: "compute-pool",
    title: "Containers & IaC",
    load: 88,
    items: ["Docker", "Docker Compose", "Kubernetes", "Terraform"],
  },
  {
    id: "cicd",
    pool: "release-pool",
    title: "CI/CD",
    load: 90,
    items: ["GitHub Actions", "Jenkins", "Quality gates", "99%+ uptime"],
  },
  {
    id: "backend-ai",
    pool: "intel-pool",
    title: "Backend & AI",
    load: 84,
    items: ["Python", "Node.js", "RAG pipelines", "REST APIs"],
  },
] as const;

export const projects = [
  {
    slug: "clickworthy",
    name: "ClickWorthy",
    url: "https://clickworthy.cloud",
    live: true,
    sla: "99.9%",
    replicas: 3,
    summary:
      "Production traffic plane on a Linux VPS with Nginx reverse proxy, TLS termination, and disciplined uptime ops.",
    architecture: [
      { layer: "Ingress", detail: "Nginx reverse proxy + TLS" },
      { layer: "Compute", detail: "Ubuntu VPS, SSH-hardened" },
      { layer: "Ops", detail: "Health checks, 99.9% uptime" },
    ],
    containers: ["linux", "nginx", "vps"],
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Plane", value: "Edge" },
      { label: "Proxy", value: "Nginx" },
    ],
  },
  {
    slug: "dental-booking",
    name: "Dental Booking Platform",
    url: null,
    live: true,
    sla: "HA",
    replicas: 4,
    summary:
      "Cloud-native booking fabric on AWS: Terraform-provisioned, Dockerized services, live WebSocket updates, Stripe payments.",
    architecture: [
      { layer: "Cloud", detail: "AWS + Terraform IaC" },
      { layer: "Runtime", detail: "Dockerized services" },
      { layer: "Realtime", detail: "WebSockets + Stripe API" },
    ],
    containers: ["aws", "terraform", "docker", "websocket", "stripe"],
    metrics: [
      { label: "IaC", value: "Terraform" },
      { label: "Pay", value: "Stripe" },
      { label: "Sync", value: "WS" },
    ],
  },
  {
    slug: "cinemax",
    name: "CINEMAX Platform",
    url: null,
    live: true,
    sla: "gated",
    replicas: 5,
    summary:
      "Multi-service cinema stack with Docker Compose orchestration and automated CI quality gates on every merge.",
    architecture: [
      { layer: "Compose", detail: "Multi-service topology" },
      { layer: "CI", detail: "Automated quality gates" },
      { layer: "Ship", detail: "Repeatable local-to-CI parity" },
    ],
    containers: ["docker-compose", "ci", "quality-gates"],
    metrics: [
      { label: "Services", value: "Multi" },
      { label: "Gates", value: "CI" },
      { label: "Pack", value: "Compose" },
    ],
  },
] as const;

export const timeline = [
  {
    sha: "a7f3c21",
    branch: "prod/jinasena",
    status: "passing" as const,
    role: "Associate DevOps Engineer",
    org: "Jinasena Engineering Technologies",
    when: "Current",
    detail:
      "Linux VPS administration, CI/CD pipeline ownership, and sustained 99%+ production uptime.",
  },
  {
    sha: "c19e804",
    branch: "ops/freelance",
    status: "passing" as const,
    role: "Freelance Software & Integration Engineer",
    org: "Independent",
    when: "Ongoing",
    detail:
      "Shipped 10+ client systems spanning RAG chatbot solutions, API integrations, and mobile apps.",
  },
  {
    sha: "9b2d441",
    branch: "edu/ucsc",
    status: "running" as const,
    role: "Master of Computing Technology (MCT)",
    org: "UCSC",
    when: "In Progress",
    detail: "Postgraduate computing technology — systems, platforms, and applied research.",
  },
  {
    sha: "e04aa18",
    branch: "research/nsrsit25",
    status: "passing" as const,
    role: 'Lead Author — "Blockchain-Based E-Voting System on ICP"',
    org: "NSRSIT '25",
    when: "2025",
    detail:
      "Lead-authored research on an Internet Computer Protocol e-voting design, presented at NSRSIT '25.",
  },
  {
    sha: "11c6bf0",
    branch: "edu/plymouth",
    status: "passing" as const,
    role: "BSc (Hons) Computer Science",
    org: "Plymouth University",
    when: "Completed",
    detail: "Second Class Upper. Foundations in software systems, algorithms, and engineering practice.",
  },
] as const;
