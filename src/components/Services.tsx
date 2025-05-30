
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ServiceModal from './ServiceModal';

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs with modern technologies and agile methodologies.',
      icon: '💻',
      features: ['Custom Web Applications', 'Mobile App Development', 'API Integration', 'Legacy System Modernization'],
      benefits: [
        'Scalable and maintainable code architecture',
        'Cross-platform compatibility',
        'Enhanced user experience',
        'Reduced operational costs',
        'Improved business efficiency',
        'Future-proof technology stack'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'Flutter', 'PostgreSQL', 'MongoDB', 'AWS'],
      process: [
        'Requirements analysis and planning',
        'UI/UX design and prototyping',
        'Development and testing',
        'Deployment and launch',
        'Maintenance and support'
      ]
    },
    {
      title: 'DevOps Solutions',
      description: 'Streamline your development pipeline with automated CI/CD, monitoring, and deployment strategies.',
      icon: '🚀',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Alerting'],
      benefits: [
        'Faster time to market',
        'Reduced deployment risks',
        'Improved collaboration',
        'Automated testing and quality assurance',
        'Enhanced security and compliance',
        'Cost optimization'
      ],
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus', 'Grafana'],
      process: [
        'Current infrastructure assessment',
        'Pipeline design and automation setup',
        'Implementation and testing',
        'Training and knowledge transfer',
        'Ongoing monitoring and optimization'
      ]
    },
    {
      title: 'Cloud Management',
      description: 'Optimize your cloud infrastructure for performance, security, and cost-effectiveness.',
      icon: '☁️',
      features: ['Cloud Migration', 'Multi-Cloud Strategy', 'Cost Optimization', 'Security & Compliance'],
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and flexibility',
        'Enhanced disaster recovery',
        'Better performance and reliability',
        'Increased security posture',
        'Global accessibility'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'CloudFormation', 'Terraform', 'CDN', 'Load Balancers'],
      process: [
        'Cloud readiness assessment',
        'Migration strategy development',
        'Phased migration execution',
        'Performance optimization',
        'Ongoing management and support'
      ]
    },
    {
      title: 'Cybersecurity Services',
      description: 'Comprehensive cybersecurity solutions to protect your business from evolving digital threats.',
      icon: '🔐',
      features: ['Security Audits & Assessments', 'Penetration Testing', 'Incident Response', 'Security Training'],
      benefits: [
        'Enhanced data protection',
        'Regulatory compliance',
        'Risk mitigation',
        'Business continuity',
        'Customer trust and confidence',
        'Reduced cyber insurance costs'
      ],
      technologies: ['SIEM', 'Vulnerability Scanners', 'Firewall Management', 'Identity Management', 'Encryption', 'Zero Trust'],
      process: [
        'Security assessment and risk analysis',
        'Security strategy development',
        'Implementation of security controls',
        'Continuous monitoring and threat detection',
        'Incident response and recovery'
      ]
    },
    {
      title: 'IT & Infrastructure Management',
      description: 'Comprehensive IT infrastructure management ensuring reliability, security, and scalability.',
      icon: '🏗️',
      features: ['Server Management', 'Database Administration', 'Security Monitoring', '24/7 Support'],
      benefits: [
        'Proactive issue resolution',
        'Minimized downtime',
        'Enhanced data protection',
        'Improved system performance',
        'Compliance management',
        'Strategic IT planning'
      ],
      technologies: ['Linux', 'Windows Server', 'VMware', 'Hyper-V', 'Active Directory', 'SIEM', 'Backup Solutions'],
      process: [
        'Infrastructure audit and assessment',
        'Strategy development and planning',
        'Implementation and migration',
        'Monitoring and maintenance setup',
        'Continuous improvement and support'
      ]
    },
    {
      title: 'Network Management',
      description: 'Design, implement, and maintain robust network infrastructures for optimal performance.',
      icon: '🌐',
      features: ['Network Design', 'Performance Optimization', 'Security Implementation', 'Troubleshooting'],
      benefits: [
        'Improved network performance',
        'Enhanced security protocols',
        'Reduced network downtime',
        'Better bandwidth utilization',
        'Scalable network architecture',
        'Comprehensive monitoring'
      ],
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto', 'VLAN', 'VPN', 'Load Balancers', 'Network Monitoring'],
      process: [
        'Network assessment and analysis',
        'Design and architecture planning',
        'Implementation and configuration',
        'Testing and optimization',
        'Ongoing monitoring and maintenance'
      ]
    }
  ];

  const handleLearnMore = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive technology solutions to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover-scale bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-emerald-200 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4 relative">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover:from-emerald-700 group-hover:to-teal-700 transition-all duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                        <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    onClick={() => handleLearnMore(service)}
                    className="w-full border-emerald-500 text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 hover:text-white hover:border-transparent transition-all duration-300 group-hover:shadow-md"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </>
  );
};

export default Services;
