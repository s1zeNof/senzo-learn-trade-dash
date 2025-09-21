import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Wallet, 
  TrendingUp, 
  BookOpen, 
  Search,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Eye,
  Award,
  Target
} from "lucide-react";

const Dashboard = () => {
  const portfolioValue = 125450.00;
  const dailyChange = 2.34;
  const isPositive = dailyChange > 0;

  const learningProgress = [
    { course: "Crypto Fundamentals", progress: 85, level: "Beginner" },
    { course: "Technical Analysis", progress: 45, level: "Intermediate" },
    { course: "DeFi Strategies", progress: 20, level: "Advanced" }
  ];

  const recentArticles = [
    { title: "Understanding Bitcoin Halving Events", category: "Education", readTime: "5 min" },
    { title: "DeFi Yield Farming Strategies", category: "Advanced", readTime: "8 min" },
    { title: "Market Analysis: Q4 2024 Outlook", category: "Research", readTime: "12 min" }
  ];

  const web3Opportunities = [
    { name: "LayerZero Testnet", type: "Testnet", reward: "Potential Airdrop", status: "Active" },
    { name: "Polygon zkEVM", type: "Mainnet", reward: "$MATIC Rewards", status: "New" },
    { name: "Arbitrum Odyssey", type: "Campaign", reward: "NFT + Tokens", status: "Completed" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">Here's your crypto learning and trading overview.</p>
        </div>

        {/* Portfolio Overview */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2 shadow-card border-0 bg-card/60 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-sm font-medium text-muted-foreground">Portfolio Value</CardTitle>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-3xl font-bold">${portfolioValue.toLocaleString()}</span>
                  <div className={`flex items-center space-x-1 text-sm ${isPositive ? 'text-success' : 'text-destructive'}`}>
                    {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    <span>{Math.abs(dailyChange)}%</span>
                  </div>
                </div>
              </div>
              <Wallet className="w-8 h-8 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-muted/20 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Portfolio Performance Chart</p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="shadow-card border-0 bg-card/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Learning Streak</span>
                  <Award className="w-4 h-4 text-secondary" />
                </div>
                <div className="text-2xl font-bold">12 Days</div>
                <p className="text-xs text-muted-foreground mt-1">Keep it up!</p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 bg-card/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Courses Completed</span>
                  <Target className="w-4 h-4 text-primary" />
                </div>
                <div className="text-2xl font-bold">8/15</div>
                <p className="text-xs text-muted-foreground mt-1">53% complete</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Learning Progress */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-card border-0 bg-card/60 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span>Learning Progress</span>
              </CardTitle>
              <Button variant="ghost" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                View All
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {learningProgress.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.course}</p>
                      <p className="text-sm text-muted-foreground">{item.level}</p>
                    </div>
                    <span className="text-sm font-medium">{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 bg-card/60 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-secondary" />
                <span>Latest Articles</span>
              </CardTitle>
              <Button variant="ghost" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                View All
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentArticles.map((article, index) => (
                <div key={index} className="flex items-start justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-smooth cursor-pointer">
                  <div className="flex-1">
                    <h4 className="font-medium mb-1 line-clamp-2">{article.title}</h4>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span>{article.category}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-2 flex-shrink-0" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Web3 Opportunities */}
        <Card className="shadow-card border-0 bg-card/60 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Search className="w-5 h-5 text-accent" />
              <span>Web3 Opportunities</span>
            </CardTitle>
            <Button variant="ghost" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {web3Opportunities.map((opportunity, index) => (
                <div key={index} className="p-4 rounded-lg border border-border/50 hover:border-border transition-smooth">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{opportunity.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      opportunity.status === 'Active' ? 'bg-primary/10 text-primary' :
                      opportunity.status === 'New' ? 'bg-secondary/10 text-secondary' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {opportunity.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{opportunity.type}</p>
                  <p className="text-sm font-medium text-primary">{opportunity.reward}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;