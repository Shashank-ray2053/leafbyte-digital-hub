
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BlogPost from './BlogPost';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const blogPosts = [
    {
      id: '1',
      title: 'Zero Trust Security: The Future of Enterprise Protection',
      excerpt: 'Discover how Zero Trust architecture is revolutionizing cybersecurity by eliminating implicit trust and continuously validating every transaction.',
      content: `Zero Trust security represents a fundamental paradigm shift in cybersecurity thinking. Unlike traditional perimeter-based security models that assume everything inside the network is trustworthy, Zero Trust operates on the principle of "never trust, always verify."

The traditional castle-and-moat approach to security is no longer sufficient in today's distributed computing landscape. With the rise of remote work, cloud computing, and mobile devices, the network perimeter has essentially dissolved. Modern organizations need a security model that can adapt to this reality.

Zero Trust architecture is built on several core principles:

**Identity Verification**: Every user, device, and application must be authenticated and authorized before accessing any resource. This includes implementing multi-factor authentication (MFA) and continuous identity verification.

**Least Privilege Access**: Users and systems are granted the minimum level of access necessary to perform their functions. Access rights are regularly reviewed and adjusted based on changing roles and responsibilities.

**Micro-segmentation**: Networks are divided into small, isolated segments that limit the blast radius of potential breaches. Even if an attacker gains access to one segment, they cannot easily move laterally to other parts of the network.

**Continuous Monitoring**: All network traffic, user behavior, and system activities are continuously monitored for anomalies. Advanced analytics and machine learning help identify potential threats in real-time.

**Data Classification and Protection**: All data is classified based on sensitivity levels, and appropriate protection measures are applied. This includes encryption at rest and in transit, data loss prevention (DLP), and rights management.

Implementation of Zero Trust requires a strategic approach:

1. **Assessment Phase**: Conduct a comprehensive audit of current security posture, identify critical assets, and map data flows.

2. **Architecture Design**: Develop a Zero Trust architecture blueprint that aligns with business objectives and regulatory requirements.

3. **Phased Implementation**: Start with the most critical assets and gradually expand the Zero Trust model across the organization.

4. **Technology Integration**: Deploy appropriate technologies including identity and access management (IAM), network access control (NAC), and security information and event management (SIEM) solutions.

5. **Continuous Improvement**: Regularly assess and refine the Zero Trust implementation based on emerging threats and changing business needs.

The benefits of Zero Trust extend beyond improved security. Organizations report better regulatory compliance, reduced operational complexity, and enhanced business agility. As cyber threats continue to evolve, Zero Trust provides a robust foundation for long-term security strategy.`,
      date: '2024-01-20',
      readTime: '12 min read',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop',
      author: 'Sarah Chen'
    },
    {
      id: '2',
      title: 'AI-Driven Threat Detection: Machine Learning in Cybersecurity',
      excerpt: 'Explore how artificial intelligence and machine learning are transforming cybersecurity threat detection and response capabilities.',
      content: `Artificial Intelligence and Machine Learning are revolutionizing cybersecurity by enabling organizations to detect and respond to threats with unprecedented speed and accuracy. As cyber attacks become more sophisticated, traditional signature-based detection methods are proving inadequate.

**The Evolution of Threat Detection**

Traditional cybersecurity relied heavily on known threat signatures and rule-based systems. While these methods were effective against known threats, they struggled with zero-day attacks and advanced persistent threats (APTs). AI-driven threat detection addresses these limitations by:

- Analyzing vast amounts of data in real-time
- Identifying patterns and anomalies that humans might miss
- Adapting to new and evolving threats automatically
- Reducing false positives through intelligent correlation

**Key AI Technologies in Cybersecurity**

**Machine Learning Algorithms**: Supervised learning models can classify known threats, while unsupervised learning identifies anomalous behavior patterns that may indicate new threats.

**Deep Learning**: Neural networks excel at pattern recognition in complex data sets, making them ideal for analyzing network traffic, user behavior, and system logs.

**Natural Language Processing (NLP)**: Helps analyze threat intelligence feeds, security reports, and even social media for emerging threat indicators.

**Behavioral Analytics**: AI systems establish baseline behaviors for users, devices, and applications, then flag deviations that could indicate compromise.

**Implementation Strategies**

Successful AI-driven threat detection requires:

1. **Data Quality**: High-quality, diverse datasets are essential for training effective AI models.

2. **Integration**: AI systems must integrate seamlessly with existing security infrastructure and workflows.

3. **Human Expertise**: AI augments rather than replaces human analysts, requiring skilled personnel to interpret results and make decisions.

4. **Continuous Learning**: AI models must be regularly updated and retrained to address evolving threats.

**Real-World Applications**

- **Endpoint Detection and Response (EDR)**: AI analyzes endpoint behavior to detect malware, suspicious processes, and unauthorized access attempts.

- **Network Security**: Machine learning algorithms monitor network traffic patterns to identify lateral movement, data exfiltration, and command-and-control communications.

- **Email Security**: AI systems analyze email content, sender behavior, and metadata to detect phishing, business email compromise, and malware delivery attempts.

- **Cloud Security**: AI monitors cloud environments for misconfigurations, unauthorized access, and abnormal resource usage patterns.

**Challenges and Considerations**

While AI offers significant advantages, organizations must address several challenges:

- **Adversarial AI**: Attackers may attempt to poison training data or evade AI detection systems.
- **Explainability**: AI decisions must be interpretable for compliance and forensic purposes.
- **Privacy**: AI systems must respect data privacy regulations while maintaining effectiveness.
- **Bias**: Training data bias can lead to discriminatory or ineffective detection capabilities.

The future of cybersecurity lies in the intelligent combination of AI technologies with human expertise, creating adaptive defense systems capable of evolving with the threat landscape.`,
      date: '2024-01-18',
      readTime: '10 min read',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=400&fit=crop',
      author: 'Dr. Michael Rodriguez'
    },
    {
      id: '3',
      title: 'Kubernetes Security: Best Practices for 2024',
      excerpt: 'Comprehensive guide to securing your Kubernetes clusters with the latest security practices and tools.',
      content: `Kubernetes has become the de facto standard for container orchestration, but with great power comes great responsibility—especially when it comes to security. As we advance through 2024, the threat landscape continues to evolve, making it crucial for organizations to implement robust security measures.

The foundation of Kubernetes security starts with proper cluster configuration. Network policies should be implemented to control traffic flow between pods and namespaces. This creates micro-segmentation that limits the blast radius of potential attacks.

Role-Based Access Control (RBAC) is another critical component. It's essential to follow the principle of least privilege, ensuring that users and service accounts only have the minimum permissions necessary to perform their tasks.

Container image security cannot be overlooked. Implementing image scanning in your CI/CD pipeline helps identify vulnerabilities before they reach production. Tools like Trivy, Clair, or commercial solutions provide comprehensive vulnerability assessments.

Runtime security monitoring has become increasingly important. Solutions that can detect anomalous behavior in real-time help organizations respond quickly to potential threats. This includes monitoring for unusual network traffic, unexpected process execution, and unauthorized file system modifications.

Secret management is often a weak point in many Kubernetes deployments. Using dedicated secret management solutions like HashiCorp Vault or cloud-native services ensures that sensitive data is properly encrypted and rotated regularly.

Pod Security Standards (PSS) replace the deprecated Pod Security Policies and provide a more streamlined approach to defining security contexts. Implementing these standards across your cluster ensures consistent security posture.

Regular security audits and penetration testing are essential. Tools like kube-bench can help validate that your cluster meets CIS Kubernetes Benchmark recommendations.

The future of Kubernetes security lies in zero-trust architectures and service mesh technologies. These approaches assume no implicit trust and verify every transaction, providing an additional layer of security.`,
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'DevOps',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
      author: 'Sarah Chen'
    },
    {
      id: '4',
      title: 'Multi-Cloud Strategy: Avoiding Vendor Lock-in',
      excerpt: 'Learn how to design and implement a multi-cloud architecture that provides flexibility and reduces dependency on single providers.',
      content: `The multi-cloud approach has evolved from a nice-to-have to a business necessity. Organizations are increasingly adopting multi-cloud strategies to avoid vendor lock-in, improve resilience, and leverage best-of-breed services from different providers.

A successful multi-cloud strategy begins with understanding your organization's specific needs. Different cloud providers excel in different areas—AWS for its comprehensive service catalog, Google Cloud for its data analytics and machine learning capabilities, and Microsoft Azure for its enterprise integration.

Container technologies like Docker and Kubernetes are fundamental enablers of multi-cloud strategies. By containerizing applications, you create portable workloads that can run consistently across different cloud environments.

Infrastructure as Code (IaC) tools such as Terraform, Pulumi, or AWS CDK enable you to define your infrastructure in a provider-agnostic manner. This approach ensures that your infrastructure definitions are portable and version-controlled.

Data strategy is perhaps the most critical aspect of multi-cloud implementation. Data gravity can create dependencies that are difficult to break. Consider implementing data replication strategies, using cloud-native databases that support multi-region deployment, or adopting data mesh architectures.

Network connectivity between clouds requires careful planning. Solutions like cloud interconnects, VPN connections, or SD-WAN technologies help create secure, high-performance connections between different cloud environments.

Monitoring and observability become more complex in multi-cloud environments. Implementing unified monitoring solutions that can work across different cloud providers ensures you maintain visibility into your entire infrastructure.

Cost management is another challenge. Each cloud provider has different pricing models, and resources can quickly become expensive without proper oversight. Implementing cloud cost management tools and practices is essential.

Security in multi-cloud environments requires a zero-trust approach. Implement consistent security policies across all cloud environments, use centralized identity and access management, and ensure that security monitoring covers all cloud deployments.

The key to successful multi-cloud adoption is starting small and gradually expanding. Begin with non-critical workloads, develop expertise, and build the necessary tooling and processes before migrating critical applications.`,
      date: '2024-01-12',
      readTime: '10 min read',
      category: 'Cloud',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      author: 'Michael Rodriguez'
    },
    {
      id: '5',
      title: 'Incident Response Planning: Preparing for Cyber Attacks',
      excerpt: 'Essential guide to developing and implementing effective incident response plans for cybersecurity breaches.',
      content: `In today's threat landscape, it's not a matter of if your organization will experience a cybersecurity incident, but when. Having a well-defined incident response plan can mean the difference between a minor disruption and a catastrophic business failure.

**Building an Effective Incident Response Team**

A successful incident response starts with assembling the right team. Your incident response team should include:

- **Incident Commander**: Overall coordinator who makes key decisions
- **Security Analysts**: Technical experts who investigate and contain threats
- **IT Operations**: Personnel responsible for system recovery and maintenance
- **Legal Counsel**: Advisors on regulatory requirements and legal implications
- **Communications**: Team members who handle internal and external communications
- **Business Stakeholders**: Representatives from affected business units

**The Six Phases of Incident Response**

**1. Preparation**: Develop policies, procedures, and tools before an incident occurs. This includes regular training, tabletop exercises, and maintaining up-to-date contact lists and escalation procedures.

**2. Identification**: Quickly detect and assess potential security incidents. Implement monitoring tools, establish clear incident classification criteria, and ensure 24/7 coverage for incident detection.

**3. Containment**: Limit the scope and impact of the incident. This may involve isolating affected systems, blocking malicious network traffic, or temporarily disabling compromised accounts.

**4. Eradication**: Remove the root cause of the incident from your environment. This includes removing malware, closing security vulnerabilities, and strengthening security controls.

**5. Recovery**: Safely restore normal operations while monitoring for signs of continued compromise. Gradually bring systems back online with enhanced monitoring and validation.

**6. Lessons Learned**: Conduct a post-incident review to identify improvements for future incidents. Document what worked well, what didn't, and update procedures accordingly.

**Communication During Incidents**

Effective communication is crucial during incident response:

- **Internal Communications**: Keep stakeholders informed with regular updates, clear status reports, and defined escalation procedures.
- **External Communications**: Manage customer communications, regulatory notifications, and media relations with pre-approved messaging templates.
- **Documentation**: Maintain detailed logs of all actions taken, decisions made, and communications sent for post-incident analysis and potential legal proceedings.

**Technology and Tools**

Modern incident response relies on sophisticated tools:

- **SIEM Systems**: Centralize log collection and provide real-time alerting
- **Forensic Tools**: Enable detailed analysis of compromised systems
- **Communication Platforms**: Facilitate coordinated response efforts
- **Automation Tools**: Accelerate response times for common scenarios

**Legal and Regulatory Considerations**

Understanding legal requirements is essential:

- **Breach Notification Laws**: Many jurisdictions require notification within specific timeframes
- **Evidence Preservation**: Maintain chain of custody for potential legal proceedings
- **Regulatory Compliance**: Ensure response activities comply with industry regulations

**Testing and Improvement**

Regular testing is essential for effective incident response:

- **Tabletop Exercises**: Simulate scenarios to test decision-making processes
- **Technical Simulations**: Test technical response capabilities
- **Full-Scale Exercises**: Comprehensive tests involving all aspects of response

The goal is not just to recover from incidents, but to emerge stronger and more resilient. A well-executed incident response program can actually enhance customer trust and demonstrate organizational maturity.`,
      date: '2024-01-10',
      readTime: '14 min read',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop',
      author: 'Jessica Kim'
    },
    {
      id: '6',
      title: 'AI-Powered DevOps: Automation and Intelligence',
      excerpt: 'Explore how artificial intelligence is revolutionizing DevOps practices and enabling intelligent automation.',
      content: `Artificial Intelligence is transforming DevOps practices, enabling unprecedented levels of automation and intelligence in software development and operations. This convergence, often called AIOps, is reshaping how organizations build, deploy, and maintain software systems.

Machine learning algorithms can analyze vast amounts of operational data to identify patterns and predict issues before they impact users. This predictive capability is particularly valuable for capacity planning, performance optimization, and incident prevention.

Intelligent automation goes beyond simple rule-based scripting. AI-powered systems can make complex decisions, adapt to changing conditions, and learn from experience. This capability is particularly useful for tasks like automated testing, deployment decisions, and resource allocation.

Code quality and security can be significantly improved through AI assistance. Tools that use machine learning can identify potential bugs, security vulnerabilities, and performance issues during the development process, enabling developers to address problems early in the software lifecycle.

Incident response and resolution can be dramatically improved with AI. Intelligent systems can correlate events across multiple systems, identify root causes, and even suggest or implement remediation actions. This reduces mean time to resolution (MTTR) and improves system reliability.

Continuous integration and deployment pipelines benefit from AI-driven optimization. Machine learning can analyze build and deployment patterns to identify bottlenecks, predict failures, and optimize pipeline performance.

Infrastructure management becomes more efficient with AI-powered tools that can automatically scale resources based on predicted demand, optimize costs, and ensure optimal performance across diverse environments.

Natural language processing (NLP) is enabling new interfaces for DevOps tools. Developers and operators can interact with systems using natural language queries, making tools more accessible and reducing the learning curve.

The integration of AI in DevOps requires careful consideration of data quality, model training, and continuous improvement. Organizations need to invest in data infrastructure and develop AI/ML expertise within their teams.

Looking forward, AI will become increasingly embedded in all aspects of the software development lifecycle, from requirements gathering to production monitoring, creating more intelligent and autonomous development and operations processes.`,
      date: '2024-01-08',
      readTime: '9 min read',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop',
      author: 'David Thompson'
    },
    {
      id: '7',
      title: 'Cloud Security Best Practices: Protecting Your Digital Assets',
      excerpt: 'Essential security measures for protecting data and applications in cloud environments across AWS, Azure, and Google Cloud.',
      content: `Cloud security is a shared responsibility between cloud providers and customers, but understanding your role in this partnership is crucial for maintaining a robust security posture. As organizations increasingly migrate to cloud environments, implementing comprehensive security measures becomes paramount.

**The Shared Responsibility Model**

Understanding the shared responsibility model is fundamental to cloud security:

- **Cloud Provider Responsibilities**: Physical security, network infrastructure, hypervisor security, and service availability
- **Customer Responsibilities**: Data protection, identity and access management, operating system security, and application-level security

**Identity and Access Management (IAM)**

Proper IAM is the foundation of cloud security:

- **Principle of Least Privilege**: Grant users and services only the minimum permissions required
- **Multi-Factor Authentication**: Implement MFA for all user accounts and privileged access
- **Role-Based Access Control**: Use roles instead of individual user permissions for scalable access management
- **Regular Access Reviews**: Periodically audit and update access permissions

**Data Protection Strategies**

Protecting data in the cloud requires multiple layers of security:

- **Encryption at Rest**: Encrypt all stored data using strong encryption algorithms
- **Encryption in Transit**: Use TLS/SSL for all data transmission
- **Key Management**: Implement robust key management practices using cloud-native or third-party solutions
- **Data Classification**: Classify data based on sensitivity and apply appropriate protection measures

**Network Security**

Secure your cloud network infrastructure:

- **Virtual Private Clouds (VPCs)**: Isolate your resources in dedicated network segments
- **Security Groups and NACLs**: Configure granular network access controls
- **Network Monitoring**: Implement continuous monitoring for suspicious network activity
- **Zero Trust Networking**: Assume no implicit trust and verify every connection

**Compliance and Governance**

Maintain compliance with regulatory requirements:

- **Compliance Frameworks**: Align with relevant standards (SOC 2, ISO 27001, GDPR, HIPAA)
- **Policy Management**: Implement and enforce security policies across all cloud resources
- **Audit Logging**: Enable comprehensive logging for all cloud activities
- **Risk Assessment**: Regularly assess and address security risks

**Incident Response in the Cloud**

Prepare for security incidents:

- **Cloud-Specific Playbooks**: Develop incident response procedures tailored to cloud environments
- **Forensic Capabilities**: Understand how to collect and preserve evidence in cloud environments
- **Communication Plans**: Establish clear communication channels with cloud providers during incidents

**Automation and DevSecOps**

Integrate security into your development and operations processes:

- **Infrastructure as Code**: Use version-controlled templates for consistent security configurations
- **Automated Security Testing**: Implement security scanning in CI/CD pipelines
- **Configuration Management**: Automate security configuration and compliance checks
- **Continuous Monitoring**: Deploy automated tools for real-time security monitoring

**Cloud-Specific Security Services**

Leverage cloud-native security services:

- **AWS**: CloudTrail, GuardDuty, Security Hub, WAF
- **Azure**: Security Center, Sentinel, Key Vault, Application Gateway
- **Google Cloud**: Security Command Center, Cloud Armor, Binary Authorization

**Best Practices Summary**

1. Implement a defense-in-depth strategy with multiple security layers
2. Automate security configurations and monitoring where possible
3. Regularly update and patch all systems and applications
4. Train staff on cloud security best practices and threats
5. Conduct regular security assessments and penetration testing
6. Maintain detailed documentation of security configurations and procedures

Cloud security is an ongoing journey that requires continuous attention, regular updates, and adaptation to evolving threats. By following these best practices and staying informed about emerging security trends, organizations can build robust and resilient cloud environments.`,
      date: '2024-01-05',
      readTime: '11 min read',
      category: 'Cloud',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop',
      author: 'Lisa Zhang'
    },
    {
      id: '8',
      title: 'The Rise of Edge Computing: Transforming Data Processing',
      excerpt: 'How edge computing is revolutionizing data processing by bringing computation closer to data sources and end users.',
      content: `Edge computing represents a fundamental shift in how we think about data processing and storage. By moving computation closer to data sources and end users, edge computing addresses the limitations of traditional centralized cloud architectures.

**Understanding Edge Computing**

Edge computing involves processing data near the source of data generation rather than relying solely on centralized cloud data centers. This approach reduces latency, improves performance, and enables new use cases that require real-time processing.

**Key Drivers of Edge Adoption**

Several factors are driving the adoption of edge computing:

- **Latency Requirements**: Applications requiring millisecond response times
- **Bandwidth Constraints**: Reducing data transmission costs and network congestion
- **Data Privacy**: Keeping sensitive data processing local
- **Reliability**: Reducing dependence on network connectivity

**Edge Computing Use Cases**

**Internet of Things (IoT)**: Edge computing enables real-time processing of sensor data, reducing the need to transmit large volumes of data to central locations.

**Autonomous Vehicles**: Self-driving cars require immediate processing of sensor data for safety-critical decisions that cannot tolerate network delays.

**Augmented Reality (AR) and Virtual Reality (VR)**: These applications require extremely low latency to provide immersive experiences without motion sickness.

**Industrial Automation**: Manufacturing processes benefit from real-time monitoring and control that edge computing provides.

**Content Delivery**: Edge computing improves content delivery performance by caching and processing content closer to users.

**Challenges and Considerations**

Implementing edge computing comes with unique challenges:

- **Resource Constraints**: Edge devices often have limited processing power, memory, and storage
- **Security**: Distributed edge nodes create a larger attack surface
- **Management Complexity**: Coordinating and managing distributed edge infrastructure
- **Data Synchronization**: Ensuring consistency across distributed edge nodes

**Technologies Enabling Edge Computing**

**5G Networks**: Provide the low-latency, high-bandwidth connectivity needed for many edge applications.

**Containerization**: Docker and Kubernetes enable consistent deployment across diverse edge hardware.

**Artificial Intelligence**: AI chips and optimized algorithms enable sophisticated processing at the edge.

**Microservices Architecture**: Enables modular, scalable applications suitable for distributed edge deployment.

**Edge Computing Architecture Patterns**

**Device Edge**: Processing directly on end-user devices or sensors
**Local Edge**: Processing at local edge servers or gateways
**Regional Edge**: Processing at regional data centers closer to users than traditional cloud centers
**Cloud Edge**: Cloud services deployed at the network edge

**Security in Edge Computing**

Securing edge computing environments requires special consideration:

- **Device Security**: Ensuring edge devices are secure and regularly updated
- **Network Security**: Protecting communication between edge nodes and central systems
- **Data Security**: Implementing encryption and access controls for distributed data
- **Identity Management**: Managing authentication and authorization across distributed systems

**The Future of Edge Computing**

Edge computing will continue to evolve with several trends:

- **Edge AI**: More sophisticated AI processing capabilities at edge devices
- **Edge-Cloud Continuum**: Seamless integration between edge and cloud processing
- **Autonomous Edge**: Self-managing edge infrastructure that requires minimal human intervention
- **Industry-Specific Solutions**: Tailored edge computing solutions for specific industries

As edge computing matures, it will become an integral part of most organizations' IT infrastructure, working in conjunction with traditional cloud computing to provide optimal performance, security, and cost-effectiveness.`,
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
      author: 'Robert Chen'
    }
  ];

  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Latest Tech Insights</h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights from the world of technology and cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="hover-scale bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-stagger-in group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800 line-clamp-2 group-hover:text-green-700 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                  <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0 group-hover:translate-x-2 transition-transform">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-600 hover:text-white transform hover:scale-105 transition-all duration-300">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
