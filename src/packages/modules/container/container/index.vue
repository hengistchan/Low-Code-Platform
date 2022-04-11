<script lang="tsx">
  import type { PropType } from "vue";
  import { renderSlot } from "vue";
  import type { Component } from "@/lib";
  import type { Props } from "./index";
  import { Col, Row } from "vant";
  import { toRefs } from "@vueuse/core";
  import { values } from "lodash";

  export default defineComponent({
    props: {
      component: {
        type: Object as PropType<Component<Props>>,
        required: true,
      },
    },
    setup(props, { slots }) {
      const component = toRef(props, "component");
      const { props: cprops } = toRefs(component);
      console.log(slots);

      return () => (
        <Row>
          {values(cprops.value.slots ?? {}).map(({ key, span }) => {
            return <Col span={parseInt(span)}>{renderSlot(slots, key)}</Col>;
          })}
        </Row>
      );
    },
  });
</script>
