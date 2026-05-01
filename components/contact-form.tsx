'use client';

import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setStatus('idle');
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`来自 ${formData.name || '访客'} 的联系消息`);
    const body = encodeURIComponent(
      `姓名：${formData.name}\n邮箱：${formData.email}\n\n${formData.message}`,
    );

    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
    setStatus('sent');
    setFormData(initialState);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>姓名</span>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="你的名字"
            autoComplete="name"
          />
        </label>
        <label>
          <span>邮箱</span>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </label>
      </div>
      <label>
        <span>消息</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="简单介绍一下你的需求或想法"
          rows={6}
          required
        />
      </label>
      <div className="form-actions">
        <button className="button button-primary" type="submit">
          发送消息
        </button>
        <p>{status === 'sent' ? '已跳转到邮箱客户端，请继续发送。' : '提交后会调用默认邮箱客户端。'}</p>
      </div>
    </form>
  );
}
