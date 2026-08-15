class SpecialNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
        <div id="site-name">
            <a href=""><h1>Ethan Lien</h1></a>
        </div>

        <p class="label">Projects</p>
        <p class="tab"><a href="/projects/adsr_pedal/">ADSR_pedal</a></p>
        <p class="tab"><a href="/projects/bur/">Bruin Underwater Robotics</a></p>
        <!-- <p class="tab"><a href="">+ See all</a></p> -->
        <p class="label"><a href="/resume/Ethan_Lien_resume_jun2026.pdf" target="_blank" title="Resume">Resume</a></p>
        <p class="label"><a href="/about/" title="About">About</a></p>
        <p class="label"><a href="/contact/" title="Contact">Contact</a></p>
        </nav>
        `
    }
}

customElements.define('special-nav',SpecialNav)