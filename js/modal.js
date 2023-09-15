
        // Function to open the top modal
        function openTopModal(image) {
            const topModal = document.querySelector('.top-modal');
            const modalImage = topModal.querySelector('.modal-content'); // Use the correct selector here
            const modalAltText = topModal.querySelector('.modal-alt-text');

            modalImage.src = image.src;
            modalAltText.textContent = image.alt;
            topModal.style.display = 'block';
        }

        // Function to open the bottom modal
        function openBottomModal(image) {
            const bottomModal = document.querySelector('.bottom-modal');
            const modalImage = bottomModal.querySelector('.modal-content'); // Use the correct selector here
            const modalAltText = bottomModal.querySelector('.modal-alt-text');

            modalImage.src = image.src;
            modalAltText.textContent = image.alt;
            bottomModal.style.display = 'block';
        }

        // Function to close the top modal
        function closeTopModal() {
            const topModal = document.querySelector('.top-modal');
            topModal.style.display = 'none';
        }

        // Function to close the bottom modal
        function closeBottomModal() {
            const bottomModal = document.querySelector('.bottom-modal');
            bottomModal.style.display = 'none';
        }
    