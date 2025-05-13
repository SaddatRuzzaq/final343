import Link from 'next/link'

export default function Menubar() {
    return (
     <>
      <ul>
        <li>
         <Link href= '/' >Home</Link>
        </li>
        <li>
          <a href='https://exam1part1.vercel.app/' target= '_blank' >Midterm Part I</a>
        <li>
       </li>
         <a href= 'https://exam-1-part2.vercel.app/' target= '_blank' >Midterm Part II</a>
         </li>
         <li>
          <Link href='/faq'>FAQ</Link>
         </li>
      </ul>
      </>
    );
  }