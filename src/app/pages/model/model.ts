// Circular Interface
export interface Circular {
    id?: number;          // Optional, since backend may generate it
    department: string;
    title: string;
    description: string;  // Added description field
    entry_date?: string;  // Optional, backend can generate current date
    attachment_url: string;
  }
  
  // Contact Data Interface (for user inquiries)
  export interface ContactData {
    name: string;
    email: string;
    message: string;
  }
  
  // Book Interface (Used for Quantum Books)
  export interface Book {
    title: string;
    description: string;
    image: string;       // Image URL
    download_link: string; // PDF or file download link
  }
  
  // Reuse Book interface for Quantum Books (Second, Third, Fourth-year)
  export type QuantumSecond = Book;
  export type QuantumThird = Book;
  export type QuantumFourth = Book;
  
  // Question Paper Interface
  export interface QuestionPaper {
    department: string;
    semester: string;
    filename: string;
    file_url: string;
    img_url: string; // Optional, if you store a preview image of the paper
  }
  