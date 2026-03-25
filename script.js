const uploadInput = document.getElementById('upload-foto');
const gallery = document.getElementById('gallery');

uploadInput.addEventListener('change', function(event) {
    const files = event.target.files;

    if (files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Cria uma URL temporária para mostrar a imagem no navegador
        const imageURL = URL.createObjectURL(file);
        
        // Pega a data do arquivo (data de modificação/criação)
        const date = new Date(file.lastModified);
        const formattedDate = date.toLocaleDateString('pt-BR', { 
            day: '2-digit', 
            month: 'long', 
            year: 'numeric' 
        });

        // Cria a "moldura" da foto (div)
        const photoFrame = document.createElement('div');
        photoFrame.className = 'photo-frame';

        // Cria a imagem (img)
        const imgElement = document.createElement('img');
        imgElement.src = imageURL;
        imgElement.alt = file.name;

        // Cria a legenda com a data (div)
        const infoElement = document.createElement('div');
        infoElement.className = 'photo-info';
        infoElement.textContent = formattedDate;

        // Junta tudo e joga na galeria
        photoFrame.appendChild(imgElement);
        photoFrame.appendChild(infoElement);
        
        // Adiciona a foto nova no topo da galeria
        gallery.prepend(photoFrame);
    }

    // Limpa o input para permitir enviar a mesma foto novamente, se quiser
    uploadInput.value = '';
});
