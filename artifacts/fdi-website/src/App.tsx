import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Layout } from "@/components/Layout";
import { LanguageProvider } from "@/contexts/LanguageContext";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Workshops from "@/pages/Workshops";
import Partnership from "@/pages/Partnership";
import Inquiry from "@/pages/Inquiry";
import Venue from "@/pages/Venue";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/workshops" component={Workshops} />
        <Route path="/partnership" component={Partnership} />
        <Route path="/inquiry" component={Inquiry} />
        <Route path="/venue" component={Venue} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
