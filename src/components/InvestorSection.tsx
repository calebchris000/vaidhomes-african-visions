import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  DollarSign,
  Globe,
  Target,
  Download,
  ArrowRight,
  BarChart3,
  PieChart,
} from "lucide-react";

export default function InvestorSection() {
  const opportunityStats = [
    {
      icon: DollarSign,
      title: "Investment Range",
      value: "$50M - $100M",
      description: "Seeking strategic investment",
      color: "text-gold-rich",
    },
    {
      icon: Target,
      title: "Equity Offering",
      value: "20% - 40%",
      description: "Competitive equity stake",
      color: "text-orange-african",
    },
    {
      icon: Globe,
      title: "Market Size",
      value: "$1.4T",
      description: "African real estate by 2025",
      color: "text-primary",
    },
    {
      icon: BarChart3,
      title: "Housing Gap",
      value: "20-28M",
      description: "Units needed in Nigeria",
      color: "text-navy-light",
    },
  ];

  const useOfFunds = [
    { item: "Land Acquisition", percentage: 40, amount: "$20M - $40M" },
    { item: "Housing Construction", percentage: 35, amount: "$17.5M - $35M" },
    { item: "HQ Development", percentage: 15, amount: "$7.5M - $15M" },
    { item: "Operations & Marketing", percentage: 10, amount: "$5M - $10M" },
  ];

  const roadmapItems = [
    {
      phase: "Phase 1",
      timeline: "6 Months",
      title: "Infrastructure Setup",
      items: [
        "Launch model-making HQ in Lagos/Abuja",
        "Acquire prime land for development",
        "Establish production facilities",
      ],
    },
    {
      phase: "Phase 2",
      timeline: "12 Months",
      title: "Team Expansion",
      items: [
        "Train first cohort of apprentices (5-10 hires)",
        "Expand client base to 20+ organizations",
        "Launch digital platform relaunch",
      ],
    },
    {
      phase: "Phase 3",
      timeline: "18 Months",
      title: "Market Expansion",
      items: [
        "Launch 5-10 furnished shortlet units",
        "Expand to additional West African countries",
        "Achieve profitability milestone",
      ],
    },
  ];

  return (
    <section id="investors" className="py-20 bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-rich/20 text-gold-rich px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Investment Opportunity</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join Africa's Real Estate Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Partner with VaidHomes to capture the $1.4 trillion African real
            estate opportunity while addressing the continent's housing deficit
          </p>
        </div>

        {/* Opportunity Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {opportunityStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
              <div className="text-2xl md:text-3xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-1">{stat.title}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Market Opportunity */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <PieChart className="w-8 h-8 text-orange-african" />
              Market Opportunity
            </h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Nigeria Housing Demand</span>
                  <span className="text-orange-african font-bold">
                    500K+ units/year
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  Annual new housing requirement to meet growing demand
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Lagos Population Growth</span>
                  <span className="text-gold-rich font-bold">
                    275K+ annually
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  New residents requiring housing solutions
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Local Model Production</span>
                  <span className="text-red-400 font-bold">&lt;1%</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Percentage of architectural models made locally in Africa
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-gold-rich" />
              Use of Funds
            </h3>
            <div className="space-y-4">
              {useOfFunds.map((fund, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{fund.item}</span>
                    <span className="text-white font-bold">
                      {fund.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-accent h-2 rounded-full"
                      style={{ width: `${fund.percentage}%` }}
                    />
                  </div>
                  <p className="text-gray-400 text-sm">{fund.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 18-Month Roadmap */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Target className="w-8 h-8 text-orange-african" />
            18-Month Expansion Plan
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {roadmapItems.map((phase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent" />

                <div className="text-orange-african font-bold text-sm mb-2">
                  {phase.phase}
                </div>
                <div className="text-2xl font-bold mb-2">{phase.title}</div>
                <div className="text-gray-400 text-sm mb-4">
                  {phase.timeline}
                </div>

                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-gold-rich rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Investment CTAs */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Invest in Africa's Future?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing African real estate with innovative
            solutions, proven expertise, and unlimited market potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              <Download className="w-5 h-5 mr-2" />
              Download Investor Deck
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white/30 text-white bg-white/10 hover:bg-white/20"
            >
              Schedule Investment Call
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-gold-rich">$6.25B</div>
                <div className="text-gray-400 text-sm">
                  Annual funding needed to close housing deficit
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-african">
                  2025
                </div>
                <div className="text-gray-400 text-sm">
                  Target market entry timeline
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">ROI</div>
                <div className="text-gray-400 text-sm">
                  Strong returns expected
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-rich">ESG</div>
                <div className="text-gray-400 text-sm">
                  Sustainable impact investing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
