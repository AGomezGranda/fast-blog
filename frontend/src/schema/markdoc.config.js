export const config = {
  nodes: {
    heading: {
      render: "Heading",
      attributes: {
        level: { type: Number, required: true },
      },
    },
  },
  tags: {
    myCustomTag: {
      render: "CustomComponent",
      attributes: {
        customAttribute: { type: String },
      },
    },
  },
};
