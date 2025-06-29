
import { Home, User, FolderOpen, Code, Mail, Menu } from "lucide-react";
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
  { title: "Contact", icon: Mail, id: "contact" },
];

export function AppSidebar() {
  const { setOpenMobile } = useSidebar();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setOpenMobile(false); // Close sidebar after navigation on mobile
    }
  };

  return (
    <Sidebar side="right" className="border-l border-pink-400/20">
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
                    onClick={() => scrollToSection(item.id)}
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
