import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book, Circular, QuestionPaper } from '../model/model';
// ✅ Ensure model is imported

@Injectable({
  providedIn: 'root'
})
export class CrmService {

  private apiUrl = 'http://localhost:8000'; // 🔹 Update this as per your API

  constructor(private http: HttpClient) {}

  // ✅ API to add a Question Paper
  addQuestionPaper(questionPaper: QuestionPaper): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/questionpaper/add`, questionPaper);
  }

  // ✅ APIs to add Quantum Books for each year
  addQuantumBook1Year(book: Book): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/quantum/first-year`, book);
  }

  addQuantumBook2Year(book: Book): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/quantum/second-year`, book);
  }

  addQuantumBook3Year(book: Book): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/quantum/third-year`, book);
  }

  addQuantumBook4Year(book: Book): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/quantum/fourth-year`, book);
  }

  addCircular(circular: Circular): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/circulars`, circular);
  }


}
