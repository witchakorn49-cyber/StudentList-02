// TODO 1: สร้าง array เก็บข้อมูลนักศึกษา (เก็บเป็น object { name, gpa })
const students = []

// เรียกตอนกดปุ่ม "เพิ่ม"
function addStudent() {
  const nameInput = document.getElementById('nameInput')
  const gpaInput = document.getElementById('gpaInput')

  const name = nameInput.value.trim()
  const gpa = gpaInput.value.trim()

  //console.log('เพิ่มนักศึกษา:', { name, gpa })

  // TODO 2: ตรวจว่า name ไม่ว่าง ถ้าว่างให้ alert แล้ว return ออกจากฟังก์ชัน
if (name === '') {
    alert('กรุณากรอกชื่อนักศึกษา')
    return
  }

  if (gpa === '' || isNaN(gpa) || gpa < 0 || gpa > 4.00) {
    alert('กรุณากรอก GPA ให้ถูกต้อง (0.00 - 4.00)')
    return
  }

  // TODO 3: push object { name, gpa } เข้า students array
  students.push({ name, gpa })
  //console.log('นักศึกษาปัจจุบัน:', students)

  // เคลียร์ช่อง input หลัง add เสร็จ
  nameInput.value = ''
  gpaInput.value = ''

  renderList()
}

// เรียกตอนกดปุ่ม "ลบ" ของแต่ละรายการ (ส่ง index ของ student คนนั้นเข้ามา)
function deleteStudent(index) {
  // TODO 4: ใช้ splice(index, 1) เพื่อลบนักศึกษาคนนั้นออกจาก array
  //ยืนยันก่อนลบ
  const confirmDelete = confirm(`คุณต้องการลบ ${students[index].name} หรือไม่?`)
  if (!confirmDelete) {
    return
  }
  students.splice(index, 1)

  renderList()
}

// วาดหน้าจอใหม่ทุกครั้งที่ข้อมูลเปลี่ยน (เรียกจาก addStudent / deleteStudent)
function renderList() {
  const listContainer = document.getElementById('studentList')
  const countDisplay = document.getElementById('countDisplay')

  // TODO 5: อัปเดตจำนวนนักศึกษาปัจจุบันใน countDisplay
  // Hint: countDisplay.textContent = students.length
countDisplay.textContent = students.length

  // กรณี list ว่าง แสดงข้อความแทน
  if (students.length === 0) {
    listContainer.innerHTML = '<p class="empty-message">ยังไม่มีรายชื่อนักศึกษา</p>'
    return
  }

  // TODO 6: สร้าง HTML แสดง student-item แต่ละคน โดยใช้ .map() แล้ว .join('')
  // Hint: แต่ละ item ต้องมีปุ่มลบที่เรียก deleteStudent(i)
  // ตัวอย่างโครงสร้าง (ให้ปรับใน TODO):
  listContainer.innerHTML = students.map((s, i) => `
    <div class="student-item">
      <div class="student-info">
        <span class="student-name">${s.name}</span>
        <span class="student-gpa">GPA: ${s.gpa}</span>
      </div>
      <button class="delete-btn" onclick="deleteStudent(${i})">ลบ</button>
    </div>
  `).join('')

}
