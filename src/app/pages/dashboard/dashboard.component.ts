import { Component } from '@angular/core';
import { CrmService } from '../services/crm.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Book, QuestionPaper } from '../model/model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [CrmService],  
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  questionPaper: QuestionPaper = {
    department: '',
    semester: '',
    filename: '',
    file_url: '',
    img_url: ''
  };

  quantumBook1: Book = { title: '', description: '', image: '', download_link: '' };
  quantumBook2: Book = { title: '', description: '', image: '', download_link: '' };
  quantumBook3: Book = { title: '', description: '', image: '', download_link: '' };
  quantumBook4: Book = { title: '', description: '', image: '', download_link: '' };

  constructor(private crmService: CrmService) {}

  // ✅ Add Question Paper
  addQuestionPaper() {
    console.log("Sending Question Paper Data:", this.questionPaper);

    this.crmService.addQuestionPaper(this.questionPaper).subscribe(response => {
      alert(response.message);
      this.questionPaper = { department: '', semester: '', filename: '', file_url: '', img_url: '' };
    }, error => {
      alert("Error: " + error.error.detail);
    });
  }

  // ✅ Add Quantum Books for each year
  addQuantumBook1Year() {
    this.crmService.addQuantumBook1Year(this.quantumBook1).subscribe(response => {
      alert(response.message);
      this.quantumBook1 = { title: '', description: '', image: '', download_link: '' };
    }, error => alert("Error: " + error.error.detail));
  }

  addQuantumBook2Year() {
    this.crmService.addQuantumBook2Year(this.quantumBook2).subscribe(response => {
      alert(response.message);
      this.quantumBook2 = { title: '', description: '', image: '', download_link: '' };
    }, error => alert("Error: " + error.error.detail));
  }

  addQuantumBook3Year() {
    this.crmService.addQuantumBook3Year(this.quantumBook3).subscribe(response => {
      alert(response.message);
      this.quantumBook3 = { title: '', description: '', image: '', download_link: '' };
    }, error => alert("Error: " + error.error.detail));
  }

  addQuantumBook4Year() {
    this.crmService.addQuantumBook4Year(this.quantumBook4).subscribe(response => {
      alert(response.message);
      this.quantumBook4 = { title: '', description: '', image: '', download_link: '' };
    }, error => alert("Error: " + error.error.detail));
  }
}
