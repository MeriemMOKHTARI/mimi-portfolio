
import { Home, User, FolderOpen, Code, Mail, Smartphone, Globe, Shield, Brain } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Home", icon: Home, id: "home" },
  { title: "Portfolio", icon: User, id: "about" },
  { title: "Projects", icon: FolderOpen, id: "projects" },
  { title: "Skills", icon: Code, id: "skills" },
  { title: "Mobile App Projects", icon: Smartphone, id: "mobile", isCategory: true },
  { title: "Web Projects", icon: Globe, id: "web", isCategory: true },
  { title: "Cybersecurity Projects", icon: Shield, id: "cybersecurity", isCategory: true },
  { title: "AI Projects", icon: Brain, id: "ai", isCategory: true },
  { title: "Contact", icon: Mail, id: "contact" },
];

interface AppSidebarProps {
  onNavigateToCategory?: (category: string) => void;
}

export function AppSidebar({ onNavigateToCategory }: AppSidebarProps) {
  const { setOpenMobile } = useSidebar();

  const handleNavigation = (item: typeof menuItems[0]) => {
    if (item.isCategory && onNavigateToCategory) {
      onNavigateToCategory(item.id);
    } else {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setOpenMobile(false); // Close sidebar after navigation on mobile
  };

  return (
    <Sidebar side="right" className="border-l border-pink-400/20 md:hidden">
      <SidebarContent className="bg-slate-900/95 backdrop-blur-md">
        <SidebarGroup>
          <SidebarGroupLabel className="text-pink-400 font-bold text-lg px-4 py-6">
            MOKHTARI MERIEM
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => handleNavigation(item)}
                    className="text-gray-300 hover:text-pink-400 hover:bg-pink-400/10 transition-colors duration-300 px-4 py-3"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
