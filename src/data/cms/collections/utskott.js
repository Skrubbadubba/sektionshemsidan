const utskott = {
    name: "utskott",
    label: "Utskott",
    folder: "src/data/utskott",
    icon: "userrectangle",
    extension: "md",
    slug: "{{slug}}",
    create: true,
    editor: {
      sortable_fields: [
        "title"
      ]
    },
    fields: [
      {
        label: "Namn",
        name: "title",
        widget: "string",
        required: true,
        hint: "Namnet här blir tillgängligt i listan av utskott som en \"medlem\" kan tillsättas"
      },
      {
        label: "Innehåll",
        name: "body",
        widget: "markdown",
        hint: "Detta är det som kommer stå i mitten-rutan på sidan"
      }
    ]
  }
export default utskott