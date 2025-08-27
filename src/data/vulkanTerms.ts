export interface VulkanTerm {
  title: string;
  description: string;
  codeExample?: string;
  url?: string;
}

// This is your single source of truth for all Vulkan terms.
// Add all the terms you want to document here.
export const vulkanTerms: Record<string, VulkanTerm> = {
  'this': {
    title: 'this',
    description: 'Check out my portfolio.',
    url: 'https://saynedbread.eu',
  },
  'RAII': {
    title: 'RAII (Resource Acquisition Is Initialization)',
    description: 'A C++ programming technique where resource lifecycle (memory, file handles, Vulkan objects) is tied to object lifetime. Objects automatically acquire resources when created and release them when destroyed, preventing leaks.',
    url: 'https://en.cppreference.com/w/cpp/language/raii.html',
  },
};
