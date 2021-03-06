/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * This file is just my OCD coding in my place.
 *
 * The goal is to have the tests properly grouped in the reporter, instead of having them all
 * over the place because we load them asynchronously.
 */

import {addHelpers} from "./helpers.spec";
import SortProviderSpecs from "./providers/sort.spec";
import FiltersProviderSpecs from "./providers/filters.spec";
import PageProviderSpecs from "./providers/page.spec";
import ItemsProviderSpecs from "./providers/items.spec";
import SelectionProviderSpecs from "./providers/selection.spec";
import DatagridActionBarSpecs from "./datagrid-action-bar.spec";
import DatagridActionOverflowSpecs from "./datagrid-action-overflow.spec";
import DatagridCellSpecs from "./datagrid-cell.spec";
import DatagridFilterSpecs from "./datagrid-filter.spec";
import DatagridColumnSpecs from "./datagrid-column.spec";
import DatagridItemsSpecs from "./datagrid-items.spec";
import DatagridRowSpecs from "./datagrid-row.spec";
import DatagridPaginationSpecs from "./datagrid-pagination.spec";
import DatagridFooterSpecs from "./datagrid-footer.spec";
import DatagridSpecs from "./datagrid.spec";
import DomAdapterSpecs from "./render/dom-adapter.spec";
import DatagridRenderOrganizerSpecs from "./render/render-organizer.spec";
import DatagridCellRendererSpecs from "./render/cell-renderer.spec";
import DatagridRowRendererSpecs from "./render/row-renderer.spec";
import DatagridBodyRendererSpecs from "./render/body-renderer.spec";
import DatagridHeaderRendererSpecs from "./render/header-renderer.spec";
import DatagridHeadRendererSpecs from "./render/head-renderer.spec";
import DatagridTableRendererSpecs from "./render/table-renderer.spec";
import DatagridMainRendererSpecs from "./render/main-renderer.spec";
import NestedPropertySpecs from "./built-in/nested-property.spec";
import DatagridPropertyComparatorSpecs from "./built-in/comparators/datagrid-property-comparator.spec";
import DatagridPropertyStringFilterSpecs from "./built-in/filters/datagrid-property-string-filter.spec";
import DatagridStringFilterSpecs from "./built-in/filters/datagrid-string-filter.spec";
import DatagridPlaceholderSpecs from "./datagrid-placeholder.spec";

describe("Datagrid", function() {
    addHelpers();

    describe("Providers", function() {
        SortProviderSpecs();
        FiltersProviderSpecs();
        PageProviderSpecs();
        ItemsProviderSpecs();
        SelectionProviderSpecs();
    });
    describe("Components", function() {
        DatagridActionBarSpecs();
        DatagridActionOverflowSpecs();
        DatagridCellSpecs();
        DatagridFilterSpecs();
        DatagridColumnSpecs();
        DatagridItemsSpecs();
        DatagridRowSpecs();
        DatagridPaginationSpecs();
        DatagridFooterSpecs();
        DatagridPlaceholderSpecs();
        DatagridSpecs();
    });
    describe("Render", function() {
        DomAdapterSpecs();
        DatagridRenderOrganizerSpecs();
        DatagridCellRendererSpecs();
        DatagridRowRendererSpecs();
        DatagridBodyRendererSpecs();
        DatagridHeaderRendererSpecs();
        DatagridHeadRendererSpecs();
        DatagridTableRendererSpecs();
        DatagridMainRendererSpecs();
    });
    describe("Built-in", function() {
        NestedPropertySpecs();
        DatagridPropertyComparatorSpecs();
        DatagridPropertyStringFilterSpecs();
        DatagridStringFilterSpecs();
    });
});
