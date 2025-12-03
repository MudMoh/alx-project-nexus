import { Job } from '../types/job';

export const fetchJobs = async (): Promise<Job[]> => {
    // Using mock data to avoid network errors and CORS issues
    console.log('Loading 15 job listings from mock data...');
    return [
        {
            id: 1,
            title: 'Senior Frontend Developer',
            company: 'TechNova Solutions',
            location: 'San Francisco',
            category: 'Tech',
            experience: 'Senior',
            description: `TechNova Solutions is a leading technology company specializing in innovative web and mobile applications. We are seeking a talented Senior Frontend Developer to join our dynamic team.

**Job Summary:**
As a Senior Frontend Developer, you will be responsible for designing, developing, and maintaining high-quality user interfaces for our web applications. You will work closely with our design and backend teams to create exceptional user experiences.

**Key Responsibilities:**
- Develop responsive, scalable, and maintainable frontend applications using React, TypeScript, and modern CSS frameworks
- Collaborate with UX/UI designers to implement pixel-perfect designs
- Optimize applications for maximum speed and scalability
- Write clean, efficient, and well-documented code
- Participate in code reviews and mentor junior developers
- Stay up-to-date with emerging frontend technologies and best practices

**Required Qualifications:**
- 5+ years of experience in frontend development
- Proficiency in React, TypeScript, and JavaScript (ES6+)
- Strong knowledge of HTML5, CSS3, and responsive design principles
- Experience with state management libraries (Redux, Zustand, or similar)
- Familiarity with testing frameworks (Jest, React Testing Library)
- Bachelor's degree in Computer Science or related field

**Preferred Qualifications:**
- Experience with Next.js or similar frameworks
- Knowledge of backend technologies (Node.js, Express)
- Experience with CI/CD pipelines and deployment tools
- Contributions to open-source projects

**What We Offer:**
- Competitive salary and equity package
- Comprehensive health, dental, and vision insurance
- Flexible work arrangements and remote work options
- Professional development budget
- Modern office with free meals and snacks
- Opportunity to work on cutting-edge projects

To apply, please submit your resume and portfolio through our application portal.`,
        },
        {
            id: 2,
            title: 'Backend Engineer',
            company: 'CodeMasters Inc.',
            location: 'New York',
            category: 'Tech',
            experience: 'Mid',
            description: `CodeMasters Inc. is a fast-growing software development company focused on building robust backend systems for enterprise clients. We're looking for a skilled Backend Engineer to help scale our infrastructure.

**Job Summary:**
The Backend Engineer will design, develop, and maintain server-side applications and APIs. You will work on high-performance systems that serve millions of users daily.

**Key Responsibilities:**
- Design and implement RESTful APIs and microservices using Node.js and Express
- Develop and maintain database schemas using PostgreSQL and MongoDB
- Optimize application performance and scalability
- Implement security best practices and data protection measures
- Collaborate with frontend developers to integrate APIs
- Write comprehensive unit and integration tests
- Participate in system architecture decisions

**Required Qualifications:**
- 3+ years of backend development experience
- Strong proficiency in Node.js and JavaScript/TypeScript
- Experience with relational and NoSQL databases
- Knowledge of RESTful API design principles
- Familiarity with version control systems (Git)
- Understanding of cloud platforms (AWS, Azure, or GCP)

**Preferred Qualifications:**
- Experience with Docker and containerization
- Knowledge of message queues (RabbitMQ, Kafka)
- Familiarity with GraphQL
- Experience with serverless architectures

**Benefits:**
- Competitive salary ($120,000 - $150,000 annually)
- Health, dental, and vision insurance
- 401(k) with company matching
- Unlimited PTO policy
- Remote work flexibility
- Learning and development stipend
- Team-building events and company retreats

Join our team and help build the future of enterprise software!`,
        },
        {
            id: 3,
            title: 'Full Stack Developer',
            company: 'WebWorks Ltd.',
            location: 'London',
            category: 'Tech',
            experience: 'Entry',
            description: `WebWorks Ltd. is an innovative digital agency specializing in custom web solutions for startups and established businesses. We're seeking a motivated Full Stack Developer to join our growing development team.

**Job Summary:**
As a Full Stack Developer, you'll work on both frontend and backend components of web applications, contributing to the entire development lifecycle from concept to deployment.

**Key Responsibilities:**
- Develop frontend interfaces using React and modern JavaScript frameworks
- Build and maintain backend APIs with Node.js and Express
- Design and implement database schemas
- Ensure responsive design and cross-browser compatibility
- Write clean, maintainable code following best practices
- Participate in agile development processes
- Collaborate with designers and product managers

**Required Qualifications:**
- 1-2 years of software development experience
- Proficiency in JavaScript, HTML, and CSS
- Basic knowledge of a backend language (Node.js preferred)
- Familiarity with version control (Git)
- Understanding of web development fundamentals
- Bachelor's degree in Computer Science or related field (or equivalent experience)

**Preferred Qualifications:**
- Experience with React or Vue.js
- Knowledge of database systems (SQL or NoSQL)
- Familiarity with cloud platforms
- Portfolio of personal or professional projects

**What We Offer:**
- Starting salary £35,000 - £45,000
- Comprehensive benefits package including private health insurance
- Flexible working hours and remote work options
- Professional development opportunities
- Creative and collaborative work environment
- Regular team social events

If you're passionate about creating amazing web experiences, we'd love to hear from you!`,
        },
        {
            id: 4,
            title: 'DevOps Engineer',
            company: 'CloudTech GmbH',
            location: 'Berlin',
            category: 'Tech',
            experience: 'Senior',
            description: `CloudTech GmbH is a leading cloud infrastructure provider serving clients across Europe. We are looking for an experienced DevOps Engineer to help us maintain and scale our cloud platforms.

**Job Summary:**
The DevOps Engineer will be responsible for designing, implementing, and maintaining our CI/CD pipelines, infrastructure, and deployment processes. You'll work closely with development teams to ensure reliable and efficient software delivery.

**Key Responsibilities:**
- Design and maintain CI/CD pipelines using Jenkins, GitLab CI, or similar tools
- Manage cloud infrastructure on AWS, Azure, or GCP
- Implement infrastructure as code using Terraform or CloudFormation
- Monitor system performance and implement automated scaling solutions
- Ensure security best practices across all systems
- Collaborate with development teams to optimize deployment processes
- Troubleshoot and resolve infrastructure issues
- Automate repetitive tasks and improve operational efficiency

**Required Qualifications:**
- 5+ years of experience in DevOps or infrastructure engineering
- Strong experience with cloud platforms (AWS preferred)
- Proficiency in infrastructure automation tools (Terraform, Ansible)
- Experience with containerization (Docker, Kubernetes)
- Knowledge of CI/CD tools and practices
- Scripting skills in Python, Bash, or similar
- Understanding of networking, security, and system administration

**Preferred Qualifications:**
- AWS certifications (DevOps Engineer, Solutions Architect)
- Experience with monitoring tools (Prometheus, Grafana, ELK stack)
- Knowledge of configuration management (Chef, Puppet)
- Familiarity with serverless architectures

**Benefits:**
- Competitive salary (€80,000 - €100,000 annually)
- Comprehensive health insurance
- Flexible working arrangements
- Professional development budget
- Modern office in central Berlin
- International team with diverse backgrounds
- Opportunity for career growth and advancement

Join CloudTech and help shape the future of cloud infrastructure in Europe!`,
        },
        {
            id: 5,
            title: 'Product Manager',
            company: 'InnovateCorp',
            location: 'Tokyo',
            category: 'Tech',
            experience: 'Lead',
            description: `InnovateCorp is a pioneering technology company developing AI-powered solutions for enterprise clients. We're seeking a Lead Product Manager to drive product strategy and execution for our flagship products.

**Job Summary:**
As a Lead Product Manager, you will own the product vision, strategy, and roadmap. You'll work cross-functionally with engineering, design, marketing, and sales teams to deliver innovative products that solve real customer problems.

**Key Responsibilities:**
- Define product vision and strategy aligned with company goals
- Conduct market research and competitive analysis
- Create and maintain product roadmaps and backlogs
- Collaborate with engineering teams to define requirements and priorities
- Work with design teams to ensure exceptional user experiences
- Analyze product metrics and user feedback to drive improvements
- Coordinate product launches and go-to-market strategies
- Mentor junior product managers and contribute to team development

**Required Qualifications:**
- 7+ years of product management experience
- Proven track record of successfully launching products
- Strong analytical skills and data-driven decision making
- Excellent communication and leadership abilities
- Experience with agile development methodologies
- Technical background or ability to understand complex technical concepts
- MBA or equivalent advanced degree preferred

**Preferred Qualifications:**
- Experience in AI/ML or enterprise software
- Familiarity with product management tools (Jira, Aha!, Productboard)
- Experience with user research and usability testing
- Knowledge of Japanese market and business culture

**What We Offer:**
- Competitive compensation package
- Comprehensive benefits including health insurance
- Flexible work environment with remote options
- Professional development and conference attendance
- Modern office in Shibuya with great amenities
- Opportunity to work on cutting-edge AI technologies
- Diverse, international team

If you're ready to lead product innovation in one of Japan's most dynamic tech companies, apply now!`,
        },
        {
            id: 6,
            title: 'UX/UI Designer',
            company: 'DesignHub',
            location: 'San Francisco',
            category: 'Tech',
            experience: 'Mid',
            description: `DesignHub is a creative design agency specializing in user-centered design for web and mobile applications. We're looking for a talented UX/UI Designer to join our collaborative team.

**Job Summary:**
The UX/UI Designer will create intuitive and visually appealing user interfaces for our clients' digital products. You'll conduct user research, create wireframes and prototypes, and ensure exceptional user experiences.

**Key Responsibilities:**
- Conduct user research and usability testing
- Create wireframes, prototypes, and high-fidelity designs
- Develop and maintain design systems and style guides
- Collaborate with product managers and developers throughout the design process
- Present design concepts to clients and stakeholders
- Iterate on designs based on user feedback and testing results
- Stay current with design trends and best practices

**Required Qualifications:**
- 3+ years of UX/UI design experience
- Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)
- Strong portfolio demonstrating UX/UI design skills
- Understanding of user-centered design principles
- Experience with prototyping tools
- Knowledge of HTML/CSS basics
- Bachelor's degree in Design, HCI, or related field

**Preferred Qualifications:**
- Experience with motion design and micro-interactions
- Familiarity with accessibility standards
- Knowledge of front-end development
- Experience in agile development environments

**Benefits:**
- Competitive salary ($90,000 - $120,000)
- Health, dental, and vision insurance
- Flexible PTO and work-from-home policy
- Professional development stipend
- Creative office space in the heart of SF
- Regular design critiques and workshops
- Opportunity to work with diverse clients

Join DesignHub and help create meaningful digital experiences that users love!`,
        },
        {
            id: 7,
            title: 'Data Scientist',
            company: 'DataDriven Analytics',
            location: 'New York',
            category: 'Finance',
            experience: 'Senior',
            description: `DataDriven Analytics is a leading data science consultancy helping Fortune 500 companies unlock insights from their data. We're seeking a Senior Data Scientist to lead advanced analytics projects.

**Job Summary:**
As a Senior Data Scientist, you'll apply advanced statistical and machine learning techniques to solve complex business problems. You'll work with large datasets to develop predictive models and provide actionable insights.

**Key Responsibilities:**
- Develop and implement machine learning models for predictive analytics
- Analyze large datasets to identify trends and patterns
- Collaborate with business stakeholders to understand requirements
- Design and execute A/B tests and experiments
- Create data visualizations and reports for executive presentations
- Mentor junior data scientists and contribute to team knowledge sharing
- Stay current with latest developments in data science and AI

**Required Qualifications:**
- PhD or Master's degree in Data Science, Statistics, Computer Science, or related field
- 5+ years of experience in data science or analytics
- Proficiency in Python, R, and SQL
- Strong knowledge of machine learning algorithms and statistical methods
- Experience with data visualization tools (Tableau, Power BI)
- Familiarity with big data technologies (Spark, Hadoop)
- Excellent communication skills for presenting complex findings

**Preferred Qualifications:**
- Experience with deep learning frameworks (TensorFlow, PyTorch)
- Knowledge of cloud platforms (AWS, GCP)
- Publications in data science conferences or journals
- Experience in financial services industry

**What We Offer:**
- Competitive salary ($140,000 - $180,000)
- Comprehensive benefits package
- Professional development opportunities
- Conference attendance and training budget
- Collaborative work environment
- Opportunity to work on diverse, high-impact projects

Join our team of data science experts and make a real impact on business decisions!`,
        },
        {
            id: 8,
            title: 'Marketing Manager',
            company: 'BrandBoost Agency',
            location: 'London',
            category: 'Marketing',
            experience: 'Lead',
            description: `BrandBoost Agency is a full-service marketing agency helping brands grow their digital presence. We're looking for a Lead Marketing Manager to oversee our client campaigns and drive strategic marketing initiatives.

**Job Summary:**
The Lead Marketing Manager will develop and execute comprehensive marketing strategies across digital channels. You'll lead a team of marketers and work closely with clients to achieve their business objectives.

**Key Responsibilities:**
- Develop and implement marketing strategies for client brands
- Manage digital marketing campaigns across multiple channels
- Lead a team of marketing specialists and coordinate with creative teams
- Analyze campaign performance and optimize for ROI
- Conduct market research and competitive analysis
- Present campaign results and recommendations to clients
- Stay current with digital marketing trends and technologies

**Required Qualifications:**
- 6+ years of marketing experience, with 3+ years in a leadership role
- Proven track record of successful marketing campaigns
- Strong knowledge of digital marketing channels (SEO, SEM, social media, email)
- Experience with marketing analytics and attribution modeling
- Excellent project management and leadership skills
- Bachelor's degree in Marketing, Business, or related field

**Preferred Qualifications:**
- Experience with marketing automation platforms
- Knowledge of content marketing and influencer partnerships
- Familiarity with CRM systems
- Agency experience preferred

**Benefits:**
- Competitive salary £60,000 - £80,000
- Performance-based bonuses
- Private health insurance
- Flexible working arrangements
- Professional development opportunities
- Creative and dynamic work environment
- Regular team events and client entertainment

If you're passionate about driving brand growth and leading marketing teams, we'd love to hear from you!`,
        },
        {
            id: 9,
            title: 'Sales Representative',
            company: 'SalesPro Solutions',
            location: 'Berlin',
            category: 'Finance',
            experience: 'Entry',
            description: `SalesPro Solutions is a B2B sales training and consulting company helping businesses improve their sales performance. We're seeking an enthusiastic Sales Representative to join our growing sales team.

**Job Summary:**
As a Sales Representative, you'll be responsible for generating new business opportunities and building relationships with potential clients. You'll represent our sales training programs and consulting services.

**Key Responsibilities:**
- Identify and qualify potential clients through cold outreach and networking
- Conduct product demonstrations and presentations
- Develop and maintain relationships with prospects and clients
- Meet or exceed monthly sales targets
- Collaborate with marketing team on lead generation activities
- Provide feedback on market trends and customer needs
- Maintain accurate records in CRM system

**Required Qualifications:**
- 1-2 years of sales experience (B2B preferred)
- Strong communication and interpersonal skills
- Self-motivated with a drive to succeed
- Ability to work independently and as part of a team
- Bachelor's degree in Business, Marketing, or related field
- Fluency in German and English

**Preferred Qualifications:**
- Experience in sales training or consulting industry
- Familiarity with CRM software (Salesforce, HubSpot)
- Knowledge of sales methodologies and techniques
- Previous experience in cold calling and prospecting

**What We Offer:**
- Base salary €35,000 - €45,000 plus uncapped commission
- Comprehensive training program
- Health insurance and other benefits
- Flexible work arrangements
- Modern office in central Berlin
- Career advancement opportunities
- Supportive and collaborative team environment

Join SalesPro and start your career in professional sales with unlimited earning potential!`,
        },
        {
            id: 10,
            title: 'HR Manager',
            company: 'HealthFirst Corp',
            location: 'Tokyo',
            category: 'Healthcare',
            experience: 'Executive',
            description: `HealthFirst Corp is a leading healthcare provider with multiple hospitals and clinics across Japan. We're seeking an experienced HR Manager to lead our human resources initiatives and support our growing workforce.

**Job Summary:**
The HR Manager will oversee all aspects of human resources management, including recruitment, employee relations, performance management, and organizational development. You'll play a key role in fostering a positive work culture.

**Key Responsibilities:**
- Develop and implement HR strategies aligned with business objectives
- Oversee recruitment, onboarding, and retention programs
- Manage employee relations, performance evaluations, and disciplinary actions
- Ensure compliance with labor laws and regulations
- Design and deliver training and development programs
- Lead diversity and inclusion initiatives
- Advise management on HR policies and procedures

**Required Qualifications:**
- 8+ years of HR experience, with 3+ years in a management role
- Strong knowledge of Japanese labor laws and HR best practices
- Excellent leadership and communication skills
- Experience with HRIS systems and performance management tools
- Bachelor's degree in Human Resources, Business Administration, or related field
- Professional HR certification (SPHR, PHR) preferred

**Preferred Qualifications:**
- Experience in healthcare industry
- Knowledge of talent acquisition strategies
- Familiarity with employee engagement surveys
- Fluency in English for international communication

**Benefits:**
- Competitive salary ¥6,000,000 - ¥8,000,000 annually
- Comprehensive health insurance for employee and family
- Retirement savings plan
- Professional development opportunities
- Work-life balance initiatives
- Modern facilities with employee amenities
- Opportunity to make a difference in healthcare

Join HealthFirst and help us build a world-class healthcare workforce!`,
        },
        {
            id: 11,
            title: 'Software Engineer',
            company: 'Tech Corp',
            location: 'New York',
            category: 'Tech',
            experience: 'Mid',
            description: `Tech Corp is an established technology company developing innovative software solutions for enterprise clients. We're looking for a skilled Software Engineer to join our development team.

**Job Summary:**
As a Software Engineer, you'll design, develop, and maintain high-quality software applications. You'll work in an agile environment, collaborating with cross-functional teams to deliver scalable solutions.

**Key Responsibilities:**
- Design and implement software solutions using modern programming languages
- Write clean, efficient, and well-documented code
- Participate in code reviews and contribute to best practices
- Collaborate with product managers and designers on feature development
- Troubleshoot and resolve software defects
- Optimize application performance and scalability
- Stay current with emerging technologies and industry trends

**Required Qualifications:**
- 3+ years of software development experience
- Proficiency in at least one programming language (Java, Python, C#, etc.)
- Experience with software development methodologies (Agile, Scrum)
- Strong problem-solving and analytical skills
- Familiarity with version control systems (Git)
- Bachelor's degree in Computer Science or related field

**Preferred Qualifications:**
- Experience with cloud platforms (AWS, Azure)
- Knowledge of containerization (Docker)
- Familiarity with microservices architecture
- Experience with automated testing

**What We Offer:**
- Competitive salary and benefits package
- Health, dental, and vision insurance
- 401(k) retirement plan with company matching
- Flexible work arrangements
- Professional development opportunities
- Collaborative and innovative work environment
- Opportunity to work on diverse projects

Join Tech Corp and be part of building the future of enterprise software!`,
        },
        {
            id: 12,
            title: 'Data Analyst',
            company: 'Data Inc',
            location: 'San Francisco',
            category: 'Finance',
            experience: 'Entry',
            description: `Data Inc is a data analytics company helping businesses make data-driven decisions. We're seeking a Data Analyst to join our analytics team and support our clients with actionable insights.

**Job Summary:**
The Data Analyst will collect, process, and analyze data to help organizations understand their performance and make informed decisions. You'll work with various data sources and tools to deliver meaningful reports.

**Key Responsibilities:**
- Collect and clean data from multiple sources
- Perform statistical analysis and data modeling
- Create dashboards and reports using visualization tools
- Identify trends and patterns in data
- Collaborate with business stakeholders to understand requirements
- Present findings to non-technical audiences
- Ensure data accuracy and integrity

**Required Qualifications:**
- Bachelor's degree in Statistics, Mathematics, Computer Science, or related field
- 1-2 years of experience in data analysis
- Proficiency in SQL and Excel
- Knowledge of statistical analysis methods
- Experience with data visualization tools (Tableau, Power BI)
- Strong analytical and problem-solving skills

**Preferred Qualifications:**
- Experience with Python or R for data analysis
- Familiarity with big data tools
- Knowledge of machine learning concepts
- Experience in financial services industry

**Benefits:**
- Competitive starting salary $65,000 - $75,000
- Comprehensive health benefits
- Flexible work environment
- Learning and development programs
- Modern office with collaborative spaces
- Opportunity for career growth
- Diverse and inclusive workplace

Start your career in data analytics with Data Inc and help businesses unlock the power of their data!`,
        },
        {
            id: 13,
            title: 'Registered Nurse',
            company: 'MedCare Hospital',
            location: 'London',
            category: 'Healthcare',
            experience: 'Mid',
            description: `MedCare Hospital is a modern healthcare facility providing comprehensive medical services to our community. We're seeking compassionate Registered Nurses to join our dedicated healthcare team.

**Job Summary:**
As a Registered Nurse, you'll provide high-quality patient care in a fast-paced hospital environment. You'll work collaboratively with physicians and healthcare professionals to ensure optimal patient outcomes.

**Key Responsibilities:**
- Assess patient health problems and needs
- Develop and implement nursing care plans
- Administer medications and treatments as prescribed
- Monitor patient vital signs and respond to changes
- Educate patients and families about health conditions
- Maintain accurate patient records and documentation
- Collaborate with multidisciplinary healthcare teams

**Required Qualifications:**
- Current RN license in the UK
- 2+ years of nursing experience
- BLS and ACLS certification
- Strong clinical assessment and critical thinking skills
- Excellent communication and interpersonal abilities
- Ability to work in a fast-paced environment

**Preferred Qualifications:**
- Experience in acute care or specialty area
- Bachelor's degree in Nursing (BSN)
- Experience with electronic health records
- Knowledge of infection control protocols

**What We Offer:**
- Competitive salary £28,000 - £38,000
- NHS pension scheme
- Comprehensive health benefits
- Professional development opportunities
- Flexible shift patterns
- Supportive work environment
- Career advancement opportunities

Join MedCare Hospital and make a difference in patients' lives every day!`,
        },
        {
            id: 14,
            title: 'Elementary School Teacher',
            company: 'EduFuture Academy',
            location: 'Berlin',
            category: 'Education',
            experience: 'Entry',
            description: `EduFuture Academy is an innovative international school committed to providing exceptional education to young learners. We're seeking passionate Elementary School Teachers to inspire and educate our students.

**Job Summary:**
The Elementary School Teacher will create engaging learning experiences for children aged 6-11. You'll implement curriculum, assess student progress, and foster a positive learning environment.

**Key Responsibilities:**
- Plan and deliver engaging lessons aligned with curriculum standards
- Assess student learning and provide constructive feedback
- Create a supportive and inclusive classroom environment
- Differentiate instruction to meet diverse learning needs
- Communicate regularly with parents about student progress
- Participate in professional development and school activities
- Maintain accurate student records and documentation

**Required Qualifications:**
- Bachelor's degree in Education or related field
- Teaching certification for primary education
- Fluency in German and English
- Passion for working with children
- Strong classroom management skills
- Knowledge of child development principles

**Preferred Qualifications:**
- Experience teaching elementary students
- Familiarity with international curricula (IB, Montessori)
- Knowledge of educational technology tools
- Experience with diverse student populations

**Benefits:**
- Competitive salary €35,000 - €45,000
- Comprehensive health insurance
- Professional development opportunities
- Paid vacation and holidays
- Supportive administrative team
- Modern facilities with educational resources
- Opportunity to work in an international environment

Join EduFuture Academy and help shape the future of young minds!`,
        },
        {
            id: 15,
            title: 'Financial Analyst',
            company: 'FinancePlus',
            location: 'Tokyo',
            category: 'Finance',
            experience: 'Senior',
            description: `FinancePlus is a leading financial services company providing investment and advisory services to institutional clients. We're seeking a Senior Financial Analyst to join our investment research team.

**Job Summary:**
The Senior Financial Analyst will conduct in-depth financial analysis, prepare investment recommendations, and support portfolio management decisions. You'll work with complex financial data to provide insights for investment strategies.

**Key Responsibilities:**
- Conduct fundamental analysis of companies and industries
- Prepare financial models and valuation analyses
- Generate investment recommendations and research reports
- Monitor market trends and economic indicators
- Present research findings to investment committees
- Collaborate with portfolio managers on investment decisions
- Maintain relationships with company management and analysts

**Required Qualifications:**
- CFA designation or progress towards CFA
- 5+ years of financial analysis experience
- Strong proficiency in Excel and financial modeling
- Excellent analytical and quantitative skills
- Knowledge of accounting principles and financial statements
- Bachelor's degree in Finance, Economics, or related field

**Preferred Qualifications:**
- Experience in investment banking or asset management
- Knowledge of Bloomberg Terminal and other financial tools
- Familiarity with Japanese financial markets
- Advanced degree (MBA, Master's in Finance)

**What We Offer:**
- Competitive salary ¥5,000,000 - ¥7,000,000
- Performance-based bonuses
- Comprehensive benefits package
- Professional development support
- Modern office in Tokyo's financial district
- Opportunity to work with global clients
- Career progression opportunities

Join FinancePlus and contribute to shaping investment strategies in Japan's dynamic financial markets!`,
        },
    ];
};