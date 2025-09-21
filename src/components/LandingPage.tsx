import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  TrendingUp, 
  Search, 
  ArrowRight,
  Shield,
  Zap,
  Users,
  Target,
  Award,
  ChartBar
} from "lucide-react";

const LandingPage = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Learn",
      description: "Master crypto fundamentals with our comprehensive courses on trading, DeFi, and blockchain technology.",
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "Trade",
      description: "Practice with paper trading, analyze markets with advanced charts, and track your performance.",
      color: "secondary"
    },
    {
      icon: Search,
      title: "Research", 
      description: "Discover Web3 opportunities, airdrops, and emerging projects with our research hub.",
      color: "accent"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Learners", icon: Users },
    { number: "500+", label: "Courses", icon: BookOpen },
    { number: "95%", label: "Success Rate", icon: Target },
    { number: "$2M+", label: "Paper Profits", icon: ChartBar }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Master Crypto with{" "}
              <span className="text-primary">Confidence</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Learn. Trade. Research. Your complete platform for crypto education, paper trading, and Web3 opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/register">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4 shadow-glow">
                  Start Learning Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform combines education, simulation, and research to give you the complete crypto learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-soft transition-smooth border-0 bg-card/60 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                    feature.color === 'primary' ? 'gradient-primary' : 
                    feature.color === 'secondary' ? 'gradient-secondary' : 
                    'gradient-accent'
                  }`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-primary mr-3" />
              <span className="text-primary font-semibold">Safe Learning Environment</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Crypto Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of learners mastering crypto with our risk-free platform. No real money needed to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/register">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4 shadow-glow">
                  <Zap className="mr-2 w-5 h-5" />
                  Get Started Now
                </Button>
              </Link>
              <Link to="/learn">
                <Button size="lg" variant="ghost" className="text-lg px-8 py-4 border border-border/50">
                  Browse Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;