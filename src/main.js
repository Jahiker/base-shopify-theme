console.log("Hey! Happy Codding Moda Foca! 🧑‍💻", window);

class SwiperSlider extends HTMLElement {
    /**
     * The constructor for the SwiperSlider component.
     *
     * This function is called whenever a new instance of the SwiperSlider is
     * created. It reads the initial configuration from the component's attributes
     * and builds the Swiper instance.
     *
     * @param {Object} [options={}] - The options for the Swiper instance.
     */
    constructor() {
        super();

        this.isMobile = window.matchMedia(`(max-width: ${window.mobileBreakpoint}px)`).matches;
        this.onlyMobile = this.dataset.onlyMobile === 'true' ? true : false;
        this.dataOptions = this.dataOptions = JSON.parse(this.querySelector("[type='application/json']").textContent) || {};

        this._init();
    }

    /**
     * Initializes the SwiperSlider component.
     *
     * This method triggers the building of the Swiper instance by calling
     * the `_buildSwiper` method.
     */
    _init() {
        if (this.onlyMobile && !this.isMobile) return;
        this._buildSwiper();
    }

    /**
     * Builds the Swiper instance when the DOM content is fully loaded.
     *
     * This method attaches an event listener to the 'DOMContentLoaded' event
     * and creates a new Swiper instance using the current element and its
     * data options.
     *
     * @private
     */
    _buildSwiper() {
        console.log("Swiper not found, waiting...", typeof Swiper);
        if (typeof Swiper === 'undefined') {
            const checkSwiper = setInterval(() => {
                if (typeof Swiper !== 'undefined') {
                    clearInterval(checkSwiper);
                    this._buildSwiper();
                }
            }, 100);
            return;
        }

        const swiper = new Swiper(this, this.dataOptions);
        console.log("SwiperSlider built", swiper);
        swiper.progress();
    }
}

customElements.define('swiper-slider', SwiperSlider);
