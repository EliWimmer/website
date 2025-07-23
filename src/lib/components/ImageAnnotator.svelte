<script>
  import { onMount } from 'svelte';

  let canvas;
  let ctx;
  let fileInput;
  let uploadedImage;
  let isDrawing = false;
  let isMovingText = false;
  let textBlocks = [];
  let currentTextBlock = null;
  let dragOffset = { x: 0, y: 0 };
  
  // Drawing state
  let drawMode = false;
  let lastX = 0;
  let lastY = 0;
  
  // Canvas dimensions
  let canvasWidth = 800;
  let canvasHeight = 600;

  onMount(() => {
    ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000';
    
    // Set initial canvas background
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  });

  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          uploadedImage = img;
          
          // Adjust canvas size to image dimensions
          canvasWidth = img.width;
          canvasHeight = img.height;
          canvas.width = canvasWidth;
          canvas.height = canvasHeight;
          
          redrawCanvas();
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  function redrawCanvas() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // Draw uploaded image if exists
    if (uploadedImage) {
      ctx.drawImage(uploadedImage, 0, 0, canvasWidth, canvasHeight);
    } else {
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }
    
    // Draw text blocks
    textBlocks.forEach(block => {
      ctx.font = `${block.fontSize}px Arial`;
      ctx.fillStyle = block.color;
      ctx.fillText(block.text, block.x, block.y);
    });
  }

  function addTextBlock() {
    const newBlock = {
      id: Date.now(),
      text: 'New Text',
      x: 100,
      y: 100,
      fontSize: 16,
      color: '#000000'
    };
    textBlocks = [...textBlocks, newBlock];
    redrawCanvas();
  }

  function updateTextBlock(id, field, value) {
    textBlocks = textBlocks.map(block => 
      block.id === id ? { ...block, [field]: value } : block
    );
    redrawCanvas();
  }

  function deleteTextBlock(id) {
    textBlocks = textBlocks.filter(block => block.id !== id);
    redrawCanvas();
  }

  function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  function handleMouseDown(e) {
    const pos = getMousePos(e);
    
    if (drawMode) {
      isDrawing = true;
      [lastX, lastY] = [pos.x, pos.y];
    } else {
      // Check if clicking on a text block
      for (let block of textBlocks) {
        ctx.font = `${block.fontSize}px Arial`;
        const textWidth = ctx.measureText(block.text).width;
        
        if (pos.x >= block.x && pos.x <= block.x + textWidth &&
            pos.y >= block.y - block.fontSize && pos.y <= block.y) {
          isMovingText = true;
          currentTextBlock = block;
          dragOffset = {
            x: pos.x - block.x,
            y: pos.y - block.y
          };
          break;
        }
      }
    }
  }

  function handleMouseMove(e) {
    const pos = getMousePos(e);
    
    if (isDrawing && drawMode) {
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      [lastX, lastY] = [pos.x, pos.y];
    } else if (isMovingText && currentTextBlock) {
      currentTextBlock.x = pos.x - dragOffset.x;
      currentTextBlock.y = pos.y - dragOffset.y;
      redrawCanvas();
    }
  }

  function handleMouseUp() {
    isDrawing = false;
    isMovingText = false;
    currentTextBlock = null;
  }

  function toggleDrawMode() {
    drawMode = !drawMode;
    canvas.style.cursor = drawMode ? 'crosshair' : 'default';
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    if (uploadedImage) {
      ctx.drawImage(uploadedImage, 0, 0, canvasWidth, canvasHeight);
    } else {
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }
    textBlocks = [];
  }

  function saveImage() {
    const link = document.createElement('a');
    link.download = 'annotated-image.png';
    link.href = canvas.toDataURL();
    link.click();
  }
</script>

<div class="image-annotator">
  <div class="controls">
    <div class="control-group">
      <input
        bind:this={fileInput}
        type="file"
        accept="image/*"
        on:change={handleFileUpload}
        class="file-input"
      />
      <button on:click={() => fileInput.click()} class="btn btn-primary">
        Upload Image
      </button>
    </div>

    <div class="control-group">
      <button on:click={addTextBlock} class="btn btn-secondary">
        Add Text
      </button>
      <button on:click={toggleDrawMode} class="btn {drawMode ? 'btn-active' : 'btn-secondary'}">
        {drawMode ? 'Exit Draw Mode' : 'Draw Mode'}
      </button>
      <button on:click={clearCanvas} class="btn btn-warning">
        Clear All
      </button>
      <button on:click={saveImage} class="btn btn-success">
        Save Image
      </button>
    </div>
  </div>

  <div class="canvas-container">
    <canvas
      bind:this={canvas}
      width={canvasWidth}
      height={canvasHeight}
      on:mousedown={handleMouseDown}
      on:mousemove={handleMouseMove}
      on:mouseup={handleMouseUp}
      on:mouseleave={handleMouseUp}
      class="annotation-canvas"
    ></canvas>
  </div>

  {#if textBlocks.length > 0}
    <div class="text-controls">
      <h3>Text Blocks</h3>
      {#each textBlocks as block (block.id)}
        <div class="text-block-control">
          <input
            type="text"
            value={block.text}
            on:input={(e) => updateTextBlock(block.id, 'text', e.target.value)}
            class="text-input"
          />
          <input
            type="number"
            value={block.fontSize}
            min="8"
            max="72"
            on:input={(e) => updateTextBlock(block.id, 'fontSize', parseInt(e.target.value))}
            class="size-input"
          />
          <input
            type="color"
            value={block.color}
            on:input={(e) => updateTextBlock(block.id, 'color', e.target.value)}
            class="color-input"
          />
          <button on:click={() => deleteTextBlock(block.id)} class="btn btn-danger btn-small">
            Delete
          </button>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .image-annotator {
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
  }

  .controls {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 20px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #e9ecef;
  }

  .control-group {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .file-input {
    display: none;
  }

  .btn {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .btn-primary {
    background: #007bff;
    color: white;
  }

  .btn-primary:hover {
    background: #0056b3;
  }

  .btn-secondary {
    background: #6c757d;
    color: white;
  }

  .btn-secondary:hover {
    background: #545b62;
  }

  .btn-active {
    background: #28a745;
    color: white;
  }

  .btn-warning {
    background: #ffc107;
    color: #212529;
  }

  .btn-warning:hover {
    background: #e0a800;
  }

  .btn-success {
    background: #28a745;
    color: white;
  }

  .btn-success:hover {
    background: #1e7e34;
  }

  .btn-danger {
    background: #dc3545;
    color: white;
  }

  .btn-danger:hover {
    background: #c82333;
  }

  .btn-small {
    padding: 4px 8px;
    font-size: 12px;
  }

  .canvas-container {
    border: 2px solid #ddd;
    border-radius: 8px;
    display: inline-block;
    background: white;
    margin-bottom: 20px;
    overflow: auto;
    max-width: 100%;
  }

  .annotation-canvas {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .text-controls {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #e9ecef;
  }

  .text-controls h3 {
    margin: 0 0 15px 0;
    color: #495057;
    font-size: 16px;
  }

  .text-block-control {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    background: white;
    border-radius: 4px;
    border: 1px solid #dee2e6;
  }

  .text-input {
    flex: 1;
    padding: 6px 10px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 14px;
  }

  .size-input {
    width: 60px;
    padding: 6px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 14px;
  }

  .color-input {
    width: 40px;
    height: 30px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .controls {
      flex-direction: column;
      align-items: stretch;
    }

    .control-group {
      justify-content: center;
    }

    .text-block-control {
      flex-direction: column;
      align-items: stretch;
    }

    .annotation-canvas {
      width: 100%;
    }
  }
</style>
