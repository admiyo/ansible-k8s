{
    "apiVersion": "v1",
    "kind": "Node",
    "metadata": {
        "name": "{{ inventory_hostname }}",
        "labels":{ "name": "{{ inventory_hostname }}-label"}
    },
    "spec": {
        "externalID": "{{ inventory_hostname }}"
    }
}
