<script>
    import { onMount, afterUpdate } from 'svelte';
  
    let debugElement;
    let iconMap = ["banana", "seven", "cherry", "plum", "orange", "bell", "bar", "lemon", "melon"];
    let icon_width = 79;
    let icon_height = 79;
    let num_icons = 9;
    let time_per_icon = 100;
    let indexes = [0, 0, 0];
  
    const roll = (reel, offset = 0) => {
      const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons);
  
      return new Promise((resolve) => {
        const style = getComputedStyle(reel);
        const backgroundPositionY = parseFloat(style["background-position-y"]);
        const targetBackgroundPositionY = backgroundPositionY + delta * icon_height;
        const normTargetBackgroundPositionY = targetBackgroundPositionY % (num_icons * icon_height);
  
        setTimeout(() => {
          reel.style.transition = `background-position-y ${(8 + 1 * delta) * time_per_icon}ms cubic-bezier(.41,-0.01,.63,1.09)`;
          reel.style.backgroundPositionY = `${backgroundPositionY + delta * icon_height}px`;
        }, offset * 150);
  
        setTimeout(() => {
          reel.style.transition = `none`;
          reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`;
          resolve(delta % num_icons);
        }, (8 + 1 * delta) * time_per_icon + offset * 150);
      });
    };
  
    const rollAll = () => {
      debugElement.textContent = 'rolling...';
  
      const reelsList = Array.from(document.querySelectorAll('.slots > .reel'));
  
      Promise.all(reelsList.map((reel, i) => roll(reel, i)))
        .then((deltas) => {
          deltas.forEach((delta, i) => (indexes[i] = (indexes[i] + delta) % num_icons));
          debugElement.textContent = indexes.map((i) => iconMap[i]).join(' - ');
  
          if (indexes[0] == indexes[1] || indexes[1] == indexes[2]) {
            const winCls = indexes[0] == indexes[2] ? 'win2' : 'win1';
            document.querySelector('.slots').classList.add(winCls);
            setTimeout(() => document.querySelector('.slots').classList.remove(winCls), 2000);
          }
  
          setTimeout(rollAll, 3000);
        });
    };
  
    onMount(() => {
      debugElement = document.getElementById('debug');
      setTimeout(rollAll, 1000);
    });
  
    afterUpdate(() => {
      debugElement.textContent = indexes.map((i) => iconMap[i]).join(' - ');
    });
  </script>


<div class="slots">
    <div class="reel"></div>
    <div class="reel"></div>
    <div class="reel"></div>
  </div>
  
  <div id="debug" class="debug"></div>
<style>
	.debug {
		position: fixed;
		top: 4px;
		left: 50%;
		transform: translateX(-50%);
		padding: 4px;
		background: white;
		border: 1px solid rgba(0, 0, 0, 0.3);
		font-family: monospace;
		font-size: 1.6rem;
	}

	.slots {
		position: relative;
		width: 276.5px;
		height: 237px;
		display: flex;
		justify-content: space-between;
		padding: 23.7px;
		background: linear-gradient(45deg, grey 0%, lightgray 100%);
		border-top: 1px solid rgba(255, 255, 255, 0.6);
		border-right: 1px solid rgba(255, 255, 255, 0.6);
		border-left: 1px solid rgba(0, 0, 0, 0.4);
		border-bottom: 1px solid rgba(0, 0, 0, 0.4);
		box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.3);
		border-radius: 3px;
	}
	.slots::before,
	.slots::after {
		content: '';
		position: absolute;
		top: 50%;
		width: 10px;
		height: 2px;
		background-color: rgba(0, 0, 0, 0.5);
	}
	.slots::before {
		left: 0;
		transform: translate(-200%, -50%);
	}
	.slots::after {
		right: 0;
		transform: translate(200%, -50%);
	}
	@-webkit-keyframes win1 {
		0% {
			background: linear-gradient(45deg, orange 0%, yellow 100%);
			box-shadow: 0 0 80px orange;
		}
		100% {
			background: linear-gradient(45deg, grey 0%, lightgrey 100%);
			box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.3);
		}
	}
	@keyframes win1 {
		0% {
			background: linear-gradient(45deg, orange 0%, yellow 100%);
			box-shadow: 0 0 80px orange;
		}
		100% {
			background: linear-gradient(45deg, grey 0%, lightgrey 100%);
			box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.3);
		}
	}
	@-webkit-keyframes win2 {
		0% {
			background: linear-gradient(45deg, lightblue 0%, lightgreen 100%);
			box-shadow: 0 0 80px lightgreen;
		}
		100% {
			background: linear-gradient(45deg, grey 0%, lightgrey 100%);
			box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.3);
		}
	}
	@keyframes win2 {
		0% {
			background: linear-gradient(45deg, lightblue 0%, lightgreen 100%);
			box-shadow: 0 0 80px lightgreen;
		}
		100% {
			background: linear-gradient(45deg, grey 0%, lightgrey 100%);
			box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.3);
		}
	}
	.slots.win1 {
		-webkit-animation: win1 200ms steps(2, end) infinite;
		animation: win1 200ms steps(2, end) infinite;
	}
	.slots.win2 {
		-webkit-animation: win2 200ms steps(2, end) infinite;
		animation: win2 200ms steps(2, end) infinite;
	}
	.slots .reel {
		position: relative;
		width: 79px;
		height: 237px;
		border: 1px solid rgba(0, 0, 0, 0.3);
		border-radius: 3px;
		overflow: hidden;
		background-image: url(https://assets.codepen.io/439000/slotreel.webp);
		background-position: 0 0;
		background-repeat: repeat-y;
	}
	.slots .reel::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(
			rgba(0, 0, 0, 0.4) 0%,
			transparent 30%,
			transparent 70%,
			rgba(0, 0, 0, 0.4) 100%
		);
		box-shadow: inset 0 0 6px 2px rgba(0, 0, 0, 0.3);
	}
</style>
