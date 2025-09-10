import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const FutureMemories = () => {
  const [memories, setMemories] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingMemory, setEditingMemory] = useState(null);

  // Load memories from localStorage
  useEffect(() => {
    const savedMemories = localStorage.getItem('futureMemories');
    if (savedMemories) {
      setMemories(JSON.parse(savedMemories));
    }
  }, []);

  // Save memories to localStorage
  const saveMemories = (newMemories) => {
    setMemories(newMemories);
    localStorage.setItem('futureMemories', JSON.stringify(newMemories));
  };

  // Add new memory
  const addMemory = (memoryData) => {
    const newMemory = {
      id: Date.now(),
      title: memoryData.title,
      description: memoryData.description,
      date: memoryData.date,
      category: memoryData.category,
      priority: memoryData.priority,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    const updatedMemories = [...memories, newMemory];
    saveMemories(updatedMemories);
    
    // Show success message
    Swal.fire({
      title: '✨ Memory Added!',
      text: 'Your future memory has been added to the wall!',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    });
  };

  // Update memory
  const updateMemory = (id, updatedData) => {
    const updatedMemories = memories.map(memory => 
      memory.id === id ? { ...memory, ...updatedData } : memory
    );
    saveMemories(updatedMemories);
    
    Swal.fire({
      title: '💕 Memory Updated!',
      text: 'Your memory has been updated successfully!',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    });
  };

  // Toggle memory completion
  const toggleMemoryCompletion = (id) => {
    const updatedMemories = memories.map(memory => 
      memory.id === id ? { ...memory, completed: !memory.completed } : memory
    );
    saveMemories(updatedMemories);
    
    const memory = memories.find(m => m.id === id);
    if (!memory.completed) {
      // Show celebration for completed memory
      Swal.fire({
        title: '🎉 Memory Completed!',
        html: `
          <div style="text-align: center; padding: 20px;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">✨</div>
            <p style="font-size: 1.2rem; color: #d63384; margin-bottom: 1rem;">
              "${memory.title}" is now a beautiful reality! 💕
            </p>
            <p style="font-style: italic; color: #666;">
              Time to create the next amazing memory together! 🌟
            </p>
          </div>
        `,
        confirmButtonText: "Let's make more memories! 💫",
        confirmButtonColor: '#d63384',
        timer: 4000,
        timerProgressBar: true
      });
    }
  };

  // Delete memory
  const deleteMemory = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This memory will be removed from your wall!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d63384',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'Keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedMemories = memories.filter(memory => memory.id !== id);
        saveMemories(updatedMemories);
        
        Swal.fire({
          title: 'Removed!',
          text: 'The memory has been removed from your wall.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
      }
    });
  };

  // Get category emoji
  const getCategoryEmoji = (category) => {
    const emojis = {
      'travel': '✈️',
      'food': '🍽️',
      'adventure': '🏔️',
      'romance': '💕',
      'celebration': '🎉',
      'learning': '📚',
      'hobby': '🎨',
      'family': '👨‍👩‍👧‍👦',
      'friends': '👫',
      'other': '⭐'
    };
    return emojis[category] || '⭐';
  };

  // Get priority color
  const getPriorityColor = (priority) => {
    const colors = {
      'high': '#ff6b6b',
      'medium': '#ffa726',
      'low': '#66bb6a'
    };
    return colors[priority] || '#66bb6a';
  };

  // Sort memories by priority and date
  const sortedMemories = [...memories].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <div className="future-memories-section">
      <div className="memories-header">
        <h2 className="memories-title">
          <i className="fas fa-heart"></i>
          Future Memories Wall
          <i className="fas fa-heart"></i>
        </h2>
        <p className="memories-subtitle">
          Dreams we'll turn into beautiful realities together ✨
        </p>
        
        <div className="memories-stats">
          <div className="stat-item">
            <span className="stat-number">{memories.length}</span>
            <span className="stat-label">Total Dreams</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{memories.filter(m => m.completed).length}</span>
            <span className="stat-label">Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{memories.filter(m => !m.completed).length}</span>
            <span className="stat-label">Still Dreaming</span>
          </div>
        </div>
      </div>

      <div className="memories-actions">
        <button 
          className="add-memory-btn"
          onClick={() => setShowAddForm(true)}
        >
          <i className="fas fa-plus"></i>
          Add New Memory
        </button>
      </div>

      {memories.length === 0 ? (
        <div className="empty-memories">
          <div className="empty-icon">💭</div>
          <h3>No memories yet!</h3>
          <p>Start building your future together by adding your first dream memory.</p>
          <button 
            className="add-first-memory-btn"
            onClick={() => setShowAddForm(true)}
          >
            <i className="fas fa-heart"></i>
            Create Your First Memory
          </button>
        </div>
      ) : (
        <div className="memories-wall">
          {sortedMemories.map((memory) => (
            <div 
              key={memory.id} 
              className={`memory-card ${memory.completed ? 'completed' : ''} priority-${memory.priority}`}
            >
              <div className="memory-header">
                <div className="memory-category">
                  <span className="category-emoji">{getCategoryEmoji(memory.category)}</span>
                  <span className="category-name">{memory.category}</span>
                </div>
                <div className="memory-actions">
                  <button 
                    className="action-btn edit-btn"
                    onClick={() => setEditingMemory(memory)}
                    title="Edit memory"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button 
                    className="action-btn delete-btn"
                    onClick={() => deleteMemory(memory.id)}
                    title="Delete memory"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
              
              <div className="memory-content">
                <h3 className="memory-title">{memory.title}</h3>
                <p className="memory-description">{memory.description}</p>
                <div className="memory-date">
                  <i className="fas fa-calendar"></i>
                  {new Date(memory.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
              
              <div className="memory-footer">
                <div className="memory-priority">
                  <span 
                    className="priority-dot"
                    style={{ backgroundColor: getPriorityColor(memory.priority) }}
                  ></span>
                  <span className="priority-text">{memory.priority} priority</span>
                </div>
                <button 
                  className={`complete-btn ${memory.completed ? 'completed' : ''}`}
                  onClick={() => toggleMemoryCompletion(memory.id)}
                >
                  <i className={`fas ${memory.completed ? 'fa-check-circle' : 'fa-circle'}`}></i>
                  {memory.completed ? 'Completed!' : 'Mark Complete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Memory Modal */}
      {(showAddForm || editingMemory) && (
        <MemoryForm
          memory={editingMemory}
          onSave={(memoryData) => {
            if (editingMemory) {
              updateMemory(editingMemory.id, memoryData);
              setEditingMemory(null);
            } else {
              addMemory(memoryData);
              setShowAddForm(false);
            }
          }}
          onCancel={() => {
            setShowAddForm(false);
            setEditingMemory(null);
          }}
        />
      )}
    </div>
  );
};

// Memory Form Component
const MemoryForm = ({ memory, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: memory?.title || '',
    description: memory?.description || '',
    date: memory?.date || '',
    category: memory?.category || 'romance',
    priority: memory?.priority || 'medium'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.date) {
      Swal.fire({
        title: 'Missing Information',
        text: 'Please fill in all required fields!',
        icon: 'warning',
        confirmButtonText: 'Got it!'
      });
      return;
    }
    onSave(formData);
  };

  return (
    <div className="memory-form-overlay">
      <div className="memory-form">
        <div className="form-header">
          <h3>
            <i className="fas fa-heart"></i>
            {memory ? 'Edit Memory' : 'Add New Memory'}
          </h3>
          <button className="close-btn" onClick={onCancel}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Memory Title *</label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              placeholder="e.g., Romantic dinner in Paris"
              maxLength={100}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Describe this beautiful memory you want to create..."
              rows={4}
              maxLength={500}
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Target Date *</label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="romance">💕 Romance</option>
                <option value="travel">✈️ Travel</option>
                <option value="food">🍽️ Food</option>
                <option value="adventure">🏔️ Adventure</option>
                <option value="celebration">🎉 Celebration</option>
                <option value="learning">📚 Learning</option>
                <option value="hobby">🎨 Hobby</option>
                <option value="family">👨‍👩‍👧‍👦 Family</option>
                <option value="friends">👫 Friends</option>
                <option value="other">⭐ Other</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              value={formData.priority}
              onChange={(e) => setFormData({...formData, priority: e.target.value})}
            >
              <option value="high">🔴 High Priority</option>
              <option value="medium">🟡 Medium Priority</option>
              <option value="low">🟢 Low Priority</option>
            </select>
          </div>
          
          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              <i className="fas fa-heart"></i>
              {memory ? 'Update Memory' : 'Add Memory'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FutureMemories;
