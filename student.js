document.addEventListener('DOMContentLoaded', function () {
  if (!localStorage.getItem('Students')) {
    const student = [
      {
        mail : 'user1@example.com',
        Maths : null,
        Eng : null,
        Yor : null,
        GSc : null,
        Govt : null
      },
      {
        mail : 'user2@example.com',
        Maths : null,
        Eng : null,
        Yor : null,
        GSc : null,
        Govt : null
      }
    ];
    localStorage.setItem('Students', JSON.stringify(student));
  }
})