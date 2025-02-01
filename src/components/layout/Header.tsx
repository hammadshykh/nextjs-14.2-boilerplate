import { Container } from "./Container";

export default function Header() {
 return (
  <header className="sticky inset-x-0 top-0 w-full">
   <Container>
    <nav className="flex items-center justify-between py-2">
     <div>Logo</div>
     {/* <div className="flex items-center gap-2">
      <ThemeToggle />
     </div> */}
    </nav>
   </Container>
  </header>
 );
}
