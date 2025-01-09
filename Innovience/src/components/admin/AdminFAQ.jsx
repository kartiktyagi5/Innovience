import React, { useState } from 'react';
import { Plus, ChevronDown, ChevronUp, Edit, Trash, X } from 'lucide-react';
import './AdminFAQ.css';

const AdminFAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'What is the duration of the internship program?',
      answer: 'Our internship program runs for 8 weeks with flexible timing options.',
      category: 'Internship',
    },
    {
      id: 2,
      question: 'Are projects mandatory?',
      answer: 'Projects are mandatory for all participants to complete the course.',
      category: 'Projects',
    },
    {
      id: 3,
      question: 'What are the general guidelines?',
      answer: 'Participants are expected to maintain professionalism and complete tasks on time.',
      category: 'General',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState(null);
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    category: 'General',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddFaq = () => {
    setEditingFaq(null);
    setFormData({ question: '', answer: '', category: 'General' });
    setIsModalOpen(true);
  };

  const handleEditFaq = (faq) => {
    setEditingFaq(faq);
    setFormData({ question: faq.question, answer: faq.answer, category: faq.category });
    setIsModalOpen(true);
  };

  const handleDeleteFaq = (id) => {
    if (window.confirm('Are you sure you want to delete this FAQ?')) {
      setFaqs((prev) => prev.filter((faq) => faq.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingFaq) {
      setFaqs((prev) =>
        prev.map((faq) => (faq.id === editingFaq.id ? { ...faq, ...formData } : faq))
      );
    } else {
      const newFaq = { ...formData, id: Date.now() };
      setFaqs((prev) => [...prev, newFaq]);
    }
    setIsModalOpen(false);
    setEditingFaq(null);
  };

  return (
    <div className="admin-faq">
      <header className="faq-header">
        <h1>FAQ Management</h1>
        <button className="add-button" onClick={handleAddFaq}>
          <Plus className="button-icon" />
          Add FAQ
        </button>
      </header>

      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <div className="faq-content">
              <div className="faq-text">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
              <div className="faq-actions">
                <button className="action-btn edit" onClick={() => handleEditFaq(faq)}>
                  <Edit className="w-4 h-4" />
                </button>
                <button className="action-btn delete" onClick={() => handleDeleteFaq(faq.id)}>
                  <Trash className="w-4 h-4" />
                </button>
                <button className="action-btn toggle">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="faq-category">
              <span className="category-badge">{faq.category}</span>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{editingFaq ? 'Edit FAQ' : 'Add FAQ'}</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div>
                <label>Question</label>
                <input
                  type="text"
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Answer</label>
                <textarea
                  name="answer"
                  value={formData.answer}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="General">General</option>
                  <option value="Internship">Internship</option>
                  <option value="Projects">Projects</option>
                </select>
              </div>
              <button type="submit">{editingFaq ? 'Update FAQ' : 'Add FAQ'}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminFAQ;
