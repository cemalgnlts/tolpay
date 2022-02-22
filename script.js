var options = {
  series: [25, 15, 44, 55, 41, 17],
  chart: {
    height: "50%",
    type: "pie",
  },
  responsive: [
    {
      breakpoint: 420,
      options: {
        chart: {
          height: "35%"
        }
      }
    }
  ],
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  theme: {
    monochrome: {
      enabled: true,
    },
  },
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -1,
      },
    },
  },
  dataLabels: {
    formatter(val, opts) {
      const name = opts.w.globals.labels[opts.seriesIndex];
      return [name, val.toFixed(1) + "%"];
    },
  },
  legend: {
    show: false,
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// intersection
const animatedElements = document.querySelectorAll("[data-anim-in]");

const observerListener = (entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      const el = entry.target;
      const anim = el.dataset.animIn;
      el.classList.add(anim);
    }

    // intersection.unobserve(el);
  });
};

const intersection = new IntersectionObserver(observerListener);
animatedElements.forEach((el) => intersection.observe(el));
