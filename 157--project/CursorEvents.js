AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" }
    },
    init: function() {
    
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    handleMouseEnterEvents:function(){
        //mouse enter events 
        this.el.addEventListener("mouseenter",()=>{
            const id =this.el.getAttribute("id");
            const postersId=[
                "superman",
                "spiderman",
                "captain-aero",
               "outer-space"
            ];
            if(postersId.includes(id)){
                const posterContainer=document.querySelector("#posters-container");
                posterContainer.setAttribute("cursor-listener",{
                    selectedItemId:id,
                });
                this.el.setAttribute("material",{color:"#1565c0"});
            }
        });
    },

    handleMouseLeaveEvents: function() {
        // Mouse Leave Events
        this.el.addEventListener("mouseleave", () => {
          const posterContainer = document.querySelector("#posters-container");
          const { state } = posterContainer.getAttribute("comic");
          if (state === "comic-list") {
            const { selectedItemId } = this.data;
            if (selectedItemId) {
              const el = document.querySelector(`#${selectedItemId}`);
              const id = el.getAttribute("id");
              if (id == selectedItemId) {
                el.setAttribute("material", {
                  color: "#0077CC",
                  opacity: 1
                });
              }
            }
          }
        });
      },
    });






