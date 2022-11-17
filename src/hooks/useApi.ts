const useApi = () => {
  function getSupplier() {
    const supplier = {
      name: "Volkswagenzentrum Berlin GmbH",
      "tags-general": [
        {
          id: 1,
          name: "volkswagen",
          type: "supplierBranch-general",
        },
        {
          id: 2,
          name: "cars",
          type: "supplierBranch-general",
        },
      ],
      "tags-certificates": [
        {
          id: 1,
          name: "ISO 9001",
          type: "supplierBranch-certificates",
        },
      ],
      "tags-portfolio": [],
    };

    return supplier;
  }
  return { getSupplier };
};

export default useApi;
