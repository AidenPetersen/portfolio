import Menu from "../../components/menu.tsx";
import Footer from "../../components/footer.tsx";

const CryptoCoprocProject = () => (
  <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1 gap-y-10 lg:gap-y-0">
    <Menu />

    <div class="space-y-2">
      <h1>Cryptographic Coprocessor</h1>
      <h2>Description</h2>
      <p>
        This a simple coprocessor that implements some cryptographic algorithms.
        Specifically, some of the ones in the proposed RISC-V crypto extension
        in the NIST Suite for RV32. It includes the following instructions:
      </p>
      <ul>
        <li>aes32dsi (AES final round decrypt)</li>
        <li>aes32dsmi (AES middle round decrypt)</li>
        <li>aes32esi (AES final round encrypt)</li>
        <li>aes32esmi (AES middle round encrypt)</li>
        <li>sha256sig0 (SHA2-256 Sigma0)</li>
        <li>sha256sig1 (SHA2-256 Sigma1)</li>
        <li>sha256sig1 (SHA2-256 Sigma1)</li>
      </ul>
      <p>
        Along with some load instructions necessary to get data into the
        coprocessor:
      </p>
      <ul>
        <li>LUI (Load upper immediate)</li>
        <li>LLU (Load lower immediate)</li>
      </ul>
      <h2>Skills</h2>
      <p>
        Through this project I learned more advanced verilog than I previously
        had experience with, along with how to use verilog build tools like
        Icarus Verilog, and how to use Make with it.
      </p>
      <p>Here is a link to the project: <a href="https://github.com/AidenPetersen/crypto-coproc">https://github.com/AidenPetersen/crypto-coproc</a></p>
      <h2>Resources Used</h2>
      <p>
        Prior to this project I was inexperienced with sequential HDL
        programming, so I used HDLBits to learn verilog better, along with the
        RISC-V cypto extention repository.
      </p>
      <ul>
        <li>
          <a href="https://github.com/riscv/riscv-crypto">RISC-V Crypto</a>
        </li>
        <li>
          <a href="https://hdlbits.01xz.net/wiki/Main_Page">HDLBits</a>
        </li>
      </ul>
      <h2>My Role</h2>
      <p>
        This project was thought of and written entirely by me.
      </p>
    </div>
    <Footer />
  </div>
);

export default CryptoCoprocProject;
