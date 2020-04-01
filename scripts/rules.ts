export const rules = [
    // ~ Hover tool tip
    {
        class: 'tool_tip_label_control',
        'font.face': 'var(font_face)',
        'font.size': 'var(font_size)',
        fg: 'var(tool_tip_fg)',
    },
    {
        class: 'preferences_section_table_row',
        attributes: ['hover'],
        'layer0.tint': 'var(accent)',
        'layer0.opacity': 1.0,
        content_margin: [0, 16, 0, 0],
    },
    {
        class: 'preferences_section_table_row',
        attributes: ['selected'],
        'layer0.tint': 'var(accent)',
        'layer0.opacity': 1.0,
        content_margin: [0, 16, 0, 0],
    },
    {
        class: 'commit_summary_control',
        attributes: ['hover'],
        'layer0.tint': 'var(commit_row_bg-hover)',
        'layer0.opacity': 1.0,
        content_margin: [8, 8, 4, 8],
    },
    // ~ Tree View Hover
    {
        class: 'table_of_contents_row_container',
        attributes: ['hover'],
        'layer0.opacity': 1.0,
    },
    // ~ Tree View Selected
    {
        class: 'table_of_contents_row_container',
        attributes: ['selected'],
        'layer0.opacity': 1.0,
    },
    // {
    //     "class": "tab_close_button",
    //     "layer0.texture": "Theme - Default/common/dark/tab_close.png",
    // },
    // {
    //     "class": "icon_folder",
    //     "layer0.texture": "Theme - Default/common/dark/folder_closed.png",
    // },
    //
    // ~ Center Branch Indicator
    {
        class: 'info_area',
        'layer0.opacity': 1.0,
        'layer0.tint': 'var(accent)',
    },
    {
        class: "file_diff_header",
        "layer0.tint": "var(accent)",
    },
    {
        class: "file_diff_header collapsible",
        "layer0.tint": "var(accent_lightest)",
    },
    // {
    //     "class": "info_area",
    //     "attributes": ["hover"],
    //     "layer0.opacity": 0.3,
    // },
    // {
    //     "class": "location_bar_heading",
    //     "color": "var(location_bar_heading_fg)",
    // },
    // {
    //     "class": "table_of_contents_heading",
    //     "color": "var(table_of_contents_heading_fg)",
    // },
    // {
    //     "class": "branch_table",
    //     "dark_content": true
    // },
    // {
    //     "class": "commit_table",
    //     "dark_content": true
    // },
    // {
    //     "class": "scroll_track_control",
    //     "parents": [{"class": "commit_table_container"}],
    //     "layer0.texture": "Theme - Merge/dark_scroll_bar.png",
    // },
    // {
    //     "class": "puck_control",
    //     "parents": [{"class": "commit_table_container"}],
    //     "layer0.texture": "Theme - Merge/dark_scroll_puck.png",
    // },

    // {
    //     "class": "scroll_track_control",
    //     "parents": [{"class": "side_bar_container"}],
    //     "layer0.texture": "Theme - Merge/dark_scroll_bar.png",
    // },
    // {
    //     "class": "puck_control",
    //     "parents": [{"class": "side_bar_container"}],
    //     "layer0.texture": "Theme - Merge/dark_scroll_puck.png",
    // },
    // {
    //     "class": "scroll_track_control",
    //     "parents": [{"class": "details_panel"}],
    //     "layer0.texture": "Theme - Merge/dark_scroll_bar.png",
    // },
    // {
    //     "class": "puck_control",
    //     "parents": [{"class": "details_panel"}],
    //     "layer0.texture": "Theme - Merge/dark_scroll_puck.png"
    // },
    // {
    //     "class": "scroll_track_control",
    //     "parents": [{"class": "overlay_control"}],
    //     "layer0.texture": "Theme - Merge/dark_scroll_bar.png",
    // },
    // {
    //     "class": "puck_control",
    //     "parents": [{"class": "overlay_control"}],
    //     "layer0.texture": "Theme - Merge/dark_scroll_puck.png",
    // },
    // {
    //     "class": "text_line_control",
    //     "layer0.tint": "var(--background)"
    // },
    // {
    //     "class": "search_text_control",
    //     "layer0.tint": "var(--background)"
    // },
    // {
    //     "class": "search_help",
    //     "headline_color": "color(var(--foreground) l(- 10%))",
    // },
    // {
    //     "class": "diff_text_control",
    //     "line_selection_color": "color(var(blue) alpha(0.05))",
    //     "line_selection_border_color": "color(var(blue) alpha(0.5))",
    //     "line_selection_border_width": 2.0,
    //     "line_selection_border_radius": 2.0,
    // },
    // {
    //     "class": "blame_text_control",
    //     "settings": ["!kelly_colors"],
    //     "num_colors": 6,
    //     "color0": "color(var(blue) s(70%))",
    //     "color1": "color(var(purple) s(70%))",
    //     "color2": "color(var(magenta) s(70%))",
    //     "color3": "color(color(var(orange) l(- 10%)) s(70%))",
    //     "color4": "color(var(yellow) s(70%))",
    //     "color5": "color(color(var(teal) l(50%)) s(70%))",
    // },
    // {
    //     "class": "blame_text_control",
    //     "settings": ["kelly_colors"],
    //     "num_colors": 17,
    //     "color0": "rgb(128, 62, 117)",
    //     "color1": "rgb(166, 189, 215)",
    //     "color2": "rgb(193, 0, 32)",
    //     "color3": "rgb(206, 162, 98)",
    //     "color4": "rgb(129, 112, 102)",
    //     "color5": "rgb(0, 125, 52)",
    //     "color6": "rgb(246, 118, 142)",
    //     "color7": "rgb(0, 83, 138)",
    //     "color8": "rgb(255, 122, 92)",
    //     "color9": "rgb(255, 142, 0)",
    //     "color10": "rgb(179, 40, 81)",
    //     "color11": "rgb(244, 200, 0)",
    //     "color12": "rgb(127, 24, 13)",
    //     "color13": "rgb(147, 170, 0)",
    //     "color14": "rgb(89, 51, 21)",
    //     "color15": "rgb(241, 58, 19)",
    //     "color16": "rgb(244, 244, 244)",
    // },
];